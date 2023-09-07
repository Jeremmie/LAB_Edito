import { useReducer, useRef, useState } from 'react'
import { getProject, val } from "@theatre/core";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Scene from './components/Scene'
import { Canvas } from '@react-three/fiber'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useControls } from 'leva'

import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";




function App() {

  const { bgColor } = useControls({
    bgColor: '#2b67d1',
  })
=======

function App() {

>>>>>>> parent of 298bd59... tweak bgColor

  const pageBtn = useRef()
  const openMenu = () => {
    var menuVisible = document.querySelector('.slidePage');
    menuVisible.classList.toggle('popUpBtnOpen');
  }

  const sheet = getProject("Fly Through").sheet("Scene");

  return (
    <>
<<<<<<< HEAD
      <div ref={pageBtn} onClick={openMenu} className='w-fit bg-melon px-2 py-1 absolute z-40 rounded-full transitionAll'>open</div>
      <div className='rounded-t-lg slidePage -bottom-full w-screen fixed z-30 bg-gunmetal/90 p-5 text-white transitionAll'>
        <h1 className='FONTCONDENSEND mt-5 text-4xl'>débarcadère</h1>
        <hr />
        <p className='mt-5'>Le débarcadère de Genève à jouer un role important dans la concurrence entre les deux compagnies.</p>
        <div className='underline decoration-solid mt-2'>lire plus</div>
      </div>
      {/* <div className='popUpBtn popUpBtnOpen bg-transparent flex justify-center align-center'>onclick</div> */}


      <Canvas gl={{ preserveDrawingBuffer: true }} className='z-0 fixed h-screen'>
        <color args={[bgColor]} attach="background" />
        <ScrollControls pages={5}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
        </ScrollControls>
=======
=======

function App() {


  return (
    <>
>>>>>>> parent of 298bd59... tweak bgColor
=======

function App() {


  return (
    <>
>>>>>>> parent of 298bd59... tweak bgColor
      <Canvas className='h-screen bg-melon'>
        <Scene />
>>>>>>> parent of 298bd59... tweak bgColor
      </Canvas>
    </>
  )
}

export default App
