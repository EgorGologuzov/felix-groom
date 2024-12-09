import React from 'react'
import Container from './Container'
import './css/News.css'
import Wheel from './Wheel';
import Spliter from './Spliter';
import Button from './Button';

export default function News() {
  return (
    <div className="news">
      <h2>Лента новостей</h2>
      <Spliter />
      <Container>
        <div className="news__wheel">
          <Wheel>
            {[0, 0, 0, 0, 0].map((_, index) => 
              <div className="news__item" key={index}>
                <h2 className="news__item-h">Изменение цены</h2>
                <p className="news__p">
                  УВАЖАЕМЫЕ КЛИЕНТЫ! В НАШЕМ САЛОНЕ С 10.02.2024 Г. ПРОИЗОШЛИ ЦЕНОВЫЕ ИЗМЕНЕНИЯ.
                </p>
                <div className="news__img">
                  <img src="/img/news-home.png" alt="News Home" />
                </div>
                <div className="news__btn">
                  <Button>Подробнее</Button>
                </div>
              </div>
            )}
          </Wheel>
        </div>
      </Container>
    </div>
  )
}
