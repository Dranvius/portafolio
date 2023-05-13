import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from "./components/Navbar";
import { Portafolio } from "./pages/Portafolio";
import {Inicio} from './components/Inicio';
import {AboutMe} from './components/AboutMe';
import {Skils} from './components/Skils';
import {Curricolo} from './components/Curicolo';
import {PortafolioComponent} from './components/PortafolioComponent';
import {Contactos} from './components/Contactos'
import {Footer} from './components/Footer'
import './styles/estilos.css';


function App() {
  
  return (
    <>
    <Portafolio/>
    <Inicio/>
    <AboutMe/>
    <Skils/>
    <Curricolo/>
    <PortafolioComponent/>
    <Contactos/>
    <Footer/>
    </>
  )
}

export default App
