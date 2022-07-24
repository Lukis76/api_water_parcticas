import React, { useState } from 'react'
import styled from 'styled-components'

export const SearcFrom = (props) => {
  const [search, setSearch] = useState()

  const handleChenge = (e) => {
    const { name, value } = e.target
    console.log(name, '=>', value)
    setSearch(value)
  }

  const fetchApi = (search) => {
    const url = `https://community-open-weather-map.p.rapidapi.com/weather?q=${search}&lat=0&lon=0&id=2172797&lang=sp&units=metric&mode=json`
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '92b5e73ee6msh17029a6aab87eaep1114a7jsn995ebdd383a0',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      },
    }
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error('error:' + err))
  }

  const searchFetch = (e) => {
    e.preventDefault()
    console.log(search)
    fetchApi(search)
  }

  return (
    <div>
      <Input
        type='text'
        placeholder='insert search'
        onChange={handleChenge}
        name='search'
      />
      <Button onClick={searchFetch}>Search</Button>
    </div>
  )
}

const Input = styled.input`
  /* width: 50%; */
  height: 3rem;
  border: none;
  border-radius: 0.8rem 0 0 0.8rem;
  background-color: #fafafa;
  color: #000;
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
`

const Button = styled.button`
  width: 8rem;
  height: 3rem;
  border: none;
  border-radius: 0 0.8rem 0.8rem 0;
  background-color: #fafafacc;
  color: #444;
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #f5f5;
    color: #444;
  }
`
