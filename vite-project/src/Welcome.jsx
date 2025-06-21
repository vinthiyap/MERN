import React from 'react'
const Welcome = (props) => {
  return (
    <div>
    <h1>This is {props.name} from {props.country}</h1>
    </div>
  )
}

export default Welcome