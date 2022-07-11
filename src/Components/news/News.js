import React from 'react'
import "./news.css"

const News = ({image, date, details}) => {
  return (
    <div className='news'>
        <div className='img-wrapper'>
            <img src={image} alt="news"/>
        </div>
        <h4>{date}</h4>
        <p>{details}</p>
    </div>
  )
}

export default News