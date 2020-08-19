import React from 'react'
import './Arrow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


export default function Arrow() {
  
  return(
    <div className="arrow">   
      <FontAwesomeIcon icon={faArrowLeft} />
      <button></button>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  )
}