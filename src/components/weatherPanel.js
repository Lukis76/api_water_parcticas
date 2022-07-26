import React, { useState } from 'react'
import styled from 'styled-components'
import { Card } from './card'
import { Loader } from './loader'
import { SearcFrom } from './searchFrom'
import { Slice } from './slice'

export const WeatherPanel = () => {
  const [weather, setWeather] = useState([])
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(undefined) //undefined
  // const [show, setShow] = useState(false)

  const getLocation = async (loc) => {
    setLoading(true)

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '92b5e73ee6msh17029a6aab87eaep1114a7jsn995ebdd383a0',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      },
    }

    //weather
    await fetch(
      `https://community-open-weather-map.p.rapidapi.com/find?q=${loc}&cnt=1&mode=json&lon=0&type=link%2C%20accurate&lat=0&units=metric`,
      options
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then((weatherData) => {
        setWeather(weatherData)
        console.log(weatherData)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        // setShow(false)
      })

    //forecast
    await fetch(
      `https://community-open-weather-map.p.rapidapi.com/forecast?q=${loc}&units=metric&mode=json`,
      options
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then((forecastData) => {
        setForecast(forecastData)
        setLoading(false)
        console.log(forecastData)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        // setShow(true)
      })
  }

  return (
    <React.Fragment>
      <SearcFrom newLocation={getLocation} />
      <PrimayContent>
        {loading === false ? (
          <Content>
            <Card weather={weather} forecast={forecast}/>

            <Slice forecast={forecast} />
          </Content>
        ) : loading === true ? (
          <Loader />
        ) : null}
      </PrimayContent>
    </React.Fragment>
  )
}

const PrimayContent = styled.div`
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  background: orange;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`
