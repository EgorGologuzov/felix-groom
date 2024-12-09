import React from 'react'
import Hero from '../components/Hero'
import Spliter from '../components/Spliter'
import Container from '../components/Container'
import './css/About.css'
import Map from '../components/Map'
import { imgPath } from '../utils/utils'

export default function About() {
  return (
    <div>
      <Hero title="О НАС" src={imgPath("hero-about.png")} />
      <Spliter />
      <Container>
        <div className="about__desc">
          <p className="about__p">
            Салон красоты для животных
            г. Нижний Тагил: пр. Строителей, 12
            Наша группа В Контакте <a href="https://vk.com/id202886637" type="_blank">https://vk.com/id202886637</a>
          </p>
          <p className="about__p">
            Груминг студия Felix занимается услугами для животных.
            Более 3500 клиентов  уже доверили нам своих питомцев...
          </p>
          <p className="about__p">
            Груминг студия Felix создана для помощи вам в уходе за вашим питомцем. Мы уверены, вы останетесь довольны, если доверите нам подстричь вашу собаку или кошку, и будете приятно удивлены нашему профессионализму и доброму отношению к вашему питомцу.
          </p>
        </div>
      </Container>
      <Spliter />
      <Map />
      <Spliter />
    </div>
  )
}
