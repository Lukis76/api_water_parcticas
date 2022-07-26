import React from 'react'
import styled from 'styled-components'

export const Card = ({ weather, forecast }) => {
  const wea = weather.list[0]
  const timeWeather = new Date(wea.dt * 1000)
  // const timeForecast = new Date(forecast.lis)
  const day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const timeForecast = (number) => {
    const date = new Date(forecast.list[number].dt * 1000)
    const result = `${date.getHours()}:${date.getMinutes()}`
    return result
  }

  return (
    <ContentCard>
      <Actual>
        <ContentTemp>
          <div>{wea.weather[0].description}</div>
          <Temperatura>{wea.main.temp}°</Temperatura>
          <div>
            {wea.main.temp_max}° / {wea.main.temp_min}°
          </div>
        </ContentTemp>
        <Data>
          <DaySemana>{day[timeWeather.getDay()]}</DaySemana>
          <DayMes>
            {timeWeather.getDate()}-{timeWeather.getMonth() + 1}
          </DayMes>
          <City>{forecast.city.name}</City>
        </Data>
      </Actual>
      <Hours>
        <div>{timeForecast(0)}</div>
        <div>{timeForecast(1)}</div>
        <div>{timeForecast(2)}</div>
        <div>{timeForecast(3)}</div>
      </Hours>
    </ContentCard>
  )
}

const ContentCard = styled.div`
  width: 100%;
  height: 50vh;
  background: linear-gradient(to top, #f8f9faaa, #ccccccbb);
  font-family: 'Roboto', sans-serif;
  border-radius: 1rem;
  /* padding: 0.5rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Actual = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  padding: 0.5rem;
`
const ContentTemp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const Temperatura = styled.h2`
  font-size: 5rem;
`

const Data = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`

const Hours = styled.div`
  background: rgba(0, 0, 0, 0.4);
  border-radius: 0 0 1rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`
const DaySemana = styled.div`
  /* height: 100%; */
`
const DayMes = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
`
const City = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`
