import React from 'react'
import Hero from '../components/Hero'
import Spliter from '../components/Spliter'
import PriceForm from '../components/PriceForm'
import { imgPath } from '../utils/utils'

export default function Pricelist() {
  return (
    <div>
      <Hero title="ЦЕНЫ НА УСЛУГИ" src={imgPath("hero-pricelist.png")} />
      <Spliter />
      <PriceForm />
      <Spliter />
    </div>
  )
}
