import React from "react"

const Madlib = ({ noun1, noun2, adjective, colour }) => {

  return (
    <ul>
      <li>noun1: {noun1}</li>
      <li>noun2: {noun2}</li>
      <li>adjective: {adjective}</li>
      <li>colour: {colour}</li>
    </ul>
  )

}

export default Madlib;