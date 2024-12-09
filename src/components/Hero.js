import React from 'react'
import Container from './Container'
import './css/Hero.css'

export default function Hero({ title, src }) {
  return (
    <div className="hero" style={{ backgroundImage: `url('${src}')` }}>
      <Container>
        <h1 className="hero__title">{ title }</h1>
      </Container>
    </div>
  )
}
