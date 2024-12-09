import React from 'react'
import './css/Button.css'

export default function Button({ children, type = "primary", ...otherProps }) {
  return (
    <button {...otherProps} className={`btn btn_${type}`}>{children}</button>
  )
}
