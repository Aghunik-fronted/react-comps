import './App.css'
import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage'

// Раскомментируйте, чтобы не было ошибок при обращении к ним
function Home() { return <h1 className="p-10">Главная</h1> }    
function ErrorPage() { return <h1 className='text-red-950 p-10'>Error 404: Страница не найдена</h1> }

function App() {
  return (
    <>
      <Header /> 
    
      <Routes>
        {/* Теперь поиск — это главная страница */}
        <Route path='/' element={<SearchPage />} />
        
        {/* Этот маршрут тоже оставляем для страховки */}
        <Route path='/search' element={<SearchPage />} />
        
        {/* Обработка несуществующих страниц */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
