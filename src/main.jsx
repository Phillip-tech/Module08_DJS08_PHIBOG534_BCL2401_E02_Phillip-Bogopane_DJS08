import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,route } from "react-router-dom"

  
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<about />} />
    </Routes>
  </BrowserRouter>
  )
}

function Home() {
  return (
    <h1>Hello, React Router!</h1>
  )
}

function About() {
  return (
    <h1>About page goes here! 🎉</h1>
  )
}



ReactDOM
.createRoot(document.getElementById('root'))
.render(<App />);