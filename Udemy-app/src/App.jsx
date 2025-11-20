import { useState } from 'react'
import Navbar from "./Components/Navbar"
import OfferCard from "./Components/OfferCard"
import SkillsSection from "./Components/SkillsSection"
import ReimagineSection from './Components/ReimagineSection'
import TopicsSection from './Components/TopicsSection'
import TrustedSection from './Components/TrustedSection.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
    <Navbar/>
    <OfferCard/>
    <SkillsSection/>
    <ReimagineSection/>
    <TopicsSection/>
    <TrustedSection/>
    </>
  )
}

export default App
