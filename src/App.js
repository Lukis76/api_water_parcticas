import React from 'react'
import styled from 'styled-components'
import { WeatherPanel } from './components/weatherPanel'

export default function App() {
  return (
    <PrimaryContent>
      <WeatherPanel></WeatherPanel>
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
  background: linear-gradient( to top, #f8f9fa, #6987c9);
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
`
