import React, { useState } from 'react'
import styled from 'styled-components'

export const SearcFrom = ({ newLocation }) => {
  const [search, setSearch] = useState()

  const handleChenge = (e) => setSearch(e.target.value)

  const searchFetch = (e) => {
    e.preventDefault()
    console.log(search)
    if (search === '' || !search) return
    newLocation(search)
  }

  return (
    <ContentSearch onSubmit={searchFetch}>
      <Input
        type='text'
        placeholder='insert search'
        onChange={handleChenge}
        name='search'
      />
      <Button type='submit'>Search</Button>
    </ContentSearch>
  )
}

const ContentSearch = styled.form`
  margin: 2rem 1rem 0 1rem;
  max-height: 3rem;
  max-width: 90%;
  width: 30rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  width: 70%;
  height: 100%;
  border: none;
  border-radius: 0.8rem 0 0 0.8rem;
  background-color: #fafafa;
  color: #000;
  font-size: 1.5rem;
  padding: 0.5rem;
`

const Button = styled.button`
  width: 30%;
  height: 100%;
  border: none;
  border-radius: 0 0.8rem 0.8rem 0;
  background-color: #fafafacc;
  color: #444;
  font-size: 1.5rem;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #f5f5;
    color: #444;
  }
`
