import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import SectionTitle from './components/SectionTitle'
import Header from './components/Header'
import Modal from './components/Modal'
import Card from './components/Card'
import Tabs from './components/Tabs'
import Accordeon from './components/Accordeon'
import Form from './components/Form'
import Todo from './components/To-do'
import { Routes, Route, NavLink, Link } from 'react-router-dom'

function Home() {
    return <h1>Главная</h1>
}    
  function AboutPage() {
    return <h1>О нас</h1>;
  }

  function ContactPage() {
    return <h1>Контакты</h1>
  }
  function ErrorPage() {
    return <h1 className='text-red-950'>Error</h1>
  }
  function App() {
    return (
    <>
      <header>Шапка
        <ul className='flex gap-3'>
          <li><NavLink className={({ isActive }) => `${isActive ? 'text-red-500 text-2xl' : 'text-amber-300'}`} to="/">Главная</NavLink> </li>
          <li><Link className='text-amber-300 text-2xl' to='/about'>О нас</Link></li>
          <li><Link className='text-amber-300 text-2xl' to='/contacts'>Контактыы</Link></li>
        </ul>

      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contacts' element={<ContactPage />} />
        <Route path='*' element={<ErrorPage />} /> 
      </Routes>
      <footer>

      </footer>
    </>
  )
  }
  


export default App
