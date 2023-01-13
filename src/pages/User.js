import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
      let {name,id} = useParams()
  return (
    <div><h1>I am {name} with id {id}</h1></div>
  )
}
