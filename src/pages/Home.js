import React from 'react'
import Hero from '../components/Hero'
import News from '../components/News'
import Spliter from '../components/Spliter'
import Gallery from '../components/Gallery'
import Request from '../components/Request'

export default function Home() {
  return (
    <div>
      <Hero title="ГРУМИНГ СТУДИЯ" src="/img/hero-home.png" />
      <Spliter />
      <News />
      <Spliter />
      <Gallery />
      <Spliter />
      <Request />
      <Spliter />
    </div>
  )
}
