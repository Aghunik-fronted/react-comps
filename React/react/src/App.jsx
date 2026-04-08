import './App.css'
import React, { useState } from 'react'
import SectionTitle from './components/SectionTitle'
import Header from './components/Header'
import Modal from './components/Modal'
import Card from './components/Card'
import Tabs from './components/Tabs'
import Accordeon from './components/Accordeon'
import Form from './components/Form'

function App() {

  const products = [
    { id:1, title: 'Ноутбук', price: 10000, popular: true},
    { id:2, title: 'Телефон', price: 5000, popular: false},
    { id:3, title: 'Планшет', price: 4500, popular: false},

  ]
  function handleClick() {
    console.log('Кнопка нажата');
  }

  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1);
  }
  function decrement () {
    setCount(count - 1)
  }
  return (
    <>
    <Tabs/>
    <Accordeon/>
    <Form/>
    <div className='p-5 border-2 border-be-mist-950'>
      <p>
        { count }
      </p>
      <button className='bg-emerald-600 text-green-400' onClick={increment}>+</button>
      <br />
      <button className='bg-emerald-600 text-green-400' onClick={decrement}>-</button>
    </div>
      <h2 className='text-3xl font-bold text-blue-700'>Привет мир!</h2>
      <button onClick={handleClick}>Нажми на меня</button>
      <input type="checkbox" onChange={handleClick} />
      <Header/>
      <SectionTitle text={1 +3 }/>
      <SectionTitle text='Ещё раз привет'/>
      <Modal title='Это пропс'>
        <b>Это children</b>
        <i>И Это</i>
      </Modal>
      {
        products.map((product) => (
          <Card key={product.id} title={product.title} price={product.price} isPopular={product.popular}/>
        ))
      }
    </>
  )
}

export default App
