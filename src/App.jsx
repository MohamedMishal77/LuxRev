import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header.jsx';  
import Hero from './component/Hero.jsx';
import Fleet from './component/Fleet.jsx';
import CarSpec from './component/Carspec.jsx';
import Support from './component/Support.jsx';
import Pricing from './component/pricing.jsx';
import Footer from './component/Footer.jsx';
function App() {
  

  return (
   <div>
   <Header/>
   <Hero />
   <Fleet />
   <CarSpec />
   <Pricing />
   <Support />
   <Footer />
   
   </div>
  )
}

export default App
