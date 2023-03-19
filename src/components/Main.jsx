import React from 'react'
import Card from './Card'
import data from '../data'

const Main = () => {
  const cards = data.map(item => 
    <Card
       key={item.id}
       item={item}
    />
    )
  return (
    <div className='Main'>
     {cards}
    </div>
  )
}

export default Main