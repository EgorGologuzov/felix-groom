import React, { useState } from 'react'
import Container from './Container'
import './css/PriceForm.css'
import Spliter from './Spliter';

export default function PriceForm() {
  const [animal, setAnimal] = useState("cat");

  return (
    <div className="priceform">
      <h2>Выберите животное</h2>
      <Spliter />
      <Container>
        <div
          className={animal === "cat" ? "priceform__animal priceform__animal_selected" : "priceform__animal"}
          style={{backgroundImage: `url("/img/cat.png")`}}
          onClick={() => setAnimal("cat")}>
          <h1>КОШКИ</h1>
        </div>
        <div
          className={animal === "dog" ? "priceform__animal priceform__animal_selected" : "priceform__animal"}
          style={{backgroundImage: `url("/img/dog.png")`}}
          onClick={() => setAnimal("dog")}>
          <h1>СОБАКИ</h1>
        </div>
      </Container>
      <Spliter />
      <h2>Выберите породу</h2>
      <Spliter />
      <Container>
        <select className="priceform__breed">
          <option>Шпиц</option>
          <option>Тойтерьер</option>
          <option>Мопс</option>
        </select>

        {TinyTable()}
        {FullTable()}
        
      </Container>
    </div>
  )
}

function FullTable() {
  return (
    <table className="priceform__table priceform__table_full">
      <tbody>
        <tr>
          <td>Вид услуги</td>
          <td>Примерное время</td>
          <td>Цена</td>
        </tr>
        <tr>
          <td>Комплекс со стрижкой</td>
          <td>~130 мин</td>
          <td>1 600 Р</td>
        </tr>
        <tr>
          <td>Вид услуги</td>
          <td>~100 мин</td>
          <td>1 300 Р</td>
        </tr>
        <tr>
          <td>Вид услуги</td>
          <td>~160 мин</td>
          <td>2 150 Р</td>
        </tr>
      </tbody>
    </table>
  )
}

function TinyTable() {
  return (
    <table className="priceform__table priceform__table_tiny">
      <tbody>
        <tr>
          <td>Комплекс со стрижкой <br/> ~130 мин &nbsp&nbsp 1 600 Р</td>
        </tr>
        <tr>
          <td>Комплекс со стрижкой <br/> ~130 мин &nbsp&nbsp 1 600 Р</td>
        </tr>
        <tr>
          <td>Комплекс со стрижкой <br/> ~130 мин &nbsp&nbsp 1 600 Р</td>
        </tr>
      </tbody>
    </table>
  )
}
