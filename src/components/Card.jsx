import React from 'react'

const Card = (props) => {

  return (
    <div className='section'>
     <div className="cover">
     <img src={`../images/${props.item.img}`} alt="" />
     </div>
    <div className="content">
    <div className="location">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F55A5A" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="11" r="3" />
  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
</svg>
   <p className="locate">
{props.item.location}
   </p>
   <a href="#">View on Google maps</a>
    </div>
    <div className="details">
   <h1 className="title--card">
    {props.item.title}
   </h1>
   <div className="date">
    <span>{props.item.stats.fromDate}</span>-
    <span>{props.item.stats.toDate}</span>
   </div>
   <p className="desc">
    {props.item.description}
   </p>
    </div>
    </div>
    </div>
  )
}



export default Card