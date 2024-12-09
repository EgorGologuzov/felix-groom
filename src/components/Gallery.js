import React from 'react'
import Container from './Container'
import './css/Gallery.css'
import Wheel from './Wheel';
import Spliter from './Spliter';
import Button from './Button';

const fotos = ["/img/gallery-home-1.png", "/img/gallery-home-2.png", "/img/gallery-home-3.png", "/img/gallery-home-1.png", "/img/gallery-home-2.png", "/img/gallery-home-3.png"];
// const fotos = ["/img/gallery-home-1.png"];

export default function Gallery() {
  return (
    <div className="gallery">
      <h2>Фотогалерея</h2>
      <Spliter />
      <Container>
        <div className="gallery__wheel">
          <Wheel>
            {fotos.map((foto, index) => 
              <img className="gallery__item" key={index} src={foto} />
            )}
          </Wheel>
        </div>
        <div className="gallery__footer">
          <Button type="secondary">Все фото</Button>
        </div>
      </Container>
    </div>
  )
}
