import React from 'react'
import Container from './Container'
import './css/Request.css'
import Spliter from './Spliter';
import Button from './Button';

export default function Request() {
  return (
    <div className="request">
      <h2>Оставить заявку</h2>
      <Spliter />
      <Container>
        <div className="request__content">
          <div className="reauest__form">
            <input type="text" placeholder="Имя" name="name" />
            <input type="text" placeholder="Почта" name="email" />
            <input type="text" placeholder="Телефон" name="phone" />
            <textarea placeholder="Комментарий" name="comment"></textarea>
            <Button>Отправить</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
