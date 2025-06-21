import { useContext } from "react"
import State from '../hooks/State'
import { Link } from 'react-router-dom'
import { UserContext } from "../hooks/UserContext"
const About = () => {
   const name=useContext(UserContext)
  return (
    <div>
        <h1>Hi! {name}</h1>
        <Link to='/state'>Userstate Example</Link><br />
        <Link to='/form'>Controlled Form</Link><br />
        <Link to='/effect'>userEffect Example</Link><br />
        <Link to='/Reducer'>Reducer</Link> 
    </div>
  )
}

export default About