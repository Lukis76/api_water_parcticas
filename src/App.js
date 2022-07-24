import React from 'react'
import styled from 'styled-components'
import { SearcFrom } from './components/searchFrom'
// import logo from './logo.svg'
// import './App.css'

export default function App() {
  // const url = `https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&id=2172797&lang=null&units=imperial&mode=jason`

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '92b5e73ee6msh17029a6aab87eaep1114a7jsn995ebdd383a0',
  //     'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
  //   },
  // }

  // fetch(url, options)
  //   .then((res) => res.json())
  //   .then((json) => console.log(json))
  //   .catch((err) => console.error('error:' + err))

  return (
    <PrimaryContent>
      <SearcFrom />
    </PrimaryContent>
  )
}

const PrimaryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  background-color: #6987c9;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  color: #6987c9;
  text-align: center;
  padding: 2rem;
`
