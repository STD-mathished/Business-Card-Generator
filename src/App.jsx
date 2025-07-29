import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {


  return (
    <>
    <Card name={'mathis'} age={19} profession={'fromager'}/>
    <Card name={'Florence'} age={19} profession={'etudiante'}/>
    <Card name={'NSI'} age={'??'} profession={'ALTERNANT'}/>
    </>
  )
}

export default App
