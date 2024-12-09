import React from 'react'
import Hero from '../components/Hero'
import Spliter from '../components/Spliter'
import PriceForm from '../components/PriceForm'

export default function Pricelist() {
  return (
    <div>
      <Hero title="ЦЕНЫ НА УСЛУГИ" src="/img/hero-pricelist.png" />
      <Spliter />
      <PriceForm />
      <Spliter />
    </div>
  )
}
