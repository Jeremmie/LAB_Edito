import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scene from './components/Scene'
import { Canvas } from '@react-three/fiber'

function App() {


  return (
    <>
      <h1>asd</h1>
      <Canvas>
        <Scene />
      </Canvas>
    </>
  )
}

export default App
