import React from 'react'
import './css/Container.css'

export default function Container({ children }) {
  return (
    <div className="container">
      { children }
    </div>
  )
}
