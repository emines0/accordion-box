import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {/*
           * onclick setShowInfo to opposite value
           */}
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          {/*
           * if showInfo true display minus else plus button
           */}
        </button>
      </header>
      {
        showInfo && <p>{info}</p>
        /*
         * if showInfo is true display paragraph with text
         */
      }
    </article>
  )
}

export default Question
