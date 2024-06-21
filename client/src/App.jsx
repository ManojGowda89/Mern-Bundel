import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import Routersfun from './Routersfun.jsx'
import { Server } from './server.jsx'
function App() {

  const [data,setdata]=useState("")
  return (
    <>
      <h1>mb64-mernpack</h1>
      <div className="card">
      
        <p>
        {data?.message}
        </p>
      </div>
      <button onClick={()=>{
        axios.get(`${Server}/api`).then((res)=>setdata(res.data)).catch((err)=>setdata(err.message))
      }}>
        click to check the backend
        </button>
    </>
  )
}

export default App
