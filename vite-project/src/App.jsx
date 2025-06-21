import { UseState } from 'react'
import ReactLogo from './assets/react.svg'
import ViteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Skills from './Skills'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Navbar from './components/Navbar'
import State from './hooks/State'
import Form from './hooks/Form'
import Effect from './hooks/Effect'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/service' element={<Service />}/>
    <Route path='/state' element={<State />}/>
    <Route path='/form' element={<Form />}/>
    <Route path='/effect' element={<Effect />}/>

    </Routes>
   <Welcome name='Virat' country='India'/> 
   <Skills skill={['React','Node','Express','Mangodb']}/>
      <h1>Hiii🤩</h1>
    </>
  )
}
export default App