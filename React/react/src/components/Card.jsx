import React from 'react'

export default function Card({title, price, isPopular}) {
  return (
    <div className='card'>
        <b>{title}</b>
        <div>
            <i>{price}</i>
        </div>
        {
            isPopular && <span>Популярное</span>

        }
    </div>
  )
}
