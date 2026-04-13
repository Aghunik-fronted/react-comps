import './App.css'
import { Routes, Route, NavLink, Link, useNavigate } from 'react-router';

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
          <li><NavLink className={({ isActive }) => `${isActive ? 'text-red-500 text-2xl' : 'text-amber-300'}`} to="/" href="/">Главная</NavLink> </li>
          <li><Link className='text-amber-300 text-2xl' to='/about'>О нас</Link></li>
          <li><Link className='text-amber-300 text-2xl' to='/contacts'>Контактыы</Link></li>
        </ul>

      </header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<AboutPage/>}></Route>
        <Route path='/' element={<ContactPage/>}></Route>
        <Route path='/' element={<ErrorPage/>}></Route>
      </Routes>
      <footer>

      </footer>
    </>
  )
  }
  


export default App
