
import { useState } from 'react'
import './App.css'
import Navbaar from './Components/Navbaar'
import NewsBoard from './Components/NewsBoard'

function App() {
const[category,setCategory]=useState("general");

  return (
    <>
    <Navbaar setCategory={setCategory}/>
    <NewsBoard category={category}/>
    </>
  )
}

export default App
