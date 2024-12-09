import React, { useState } from 'react'
import { Link, Outlet } from 'react-router'
import Container from '../components/Container'
import './css/Header.css'
import './css/Footer.css'
import { Menu } from '../hoc/Svg_withLink'
import { imgPath } from '../utils/utils'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <div className="header__toggle">
            <Menu onClick={handleToggle} />
          </div>
          <Link to="home" onClick={() => setIsOpen(false)}>
            <img className="header__logo" src={imgPath("logo.png")} alt="logo" />
          </Link>
          <nav className={isOpen ? "header__nav header__nav_open" : "header__nav"}>
            <ul className="header__ul">
              <li className="header__li"><Link to="about" onClick={handleToggle}>О нас</Link></li>
              <li className="header__li"><Link to="foto" onClick={handleToggle}>Фото</Link></li>
              <li className="header__li"><Link to="video" onClick={handleToggle}>Видео</Link></li>
              <li className="header__li"><Link to="partners" onClick={handleToggle}>Партнеры</Link></li>
              <li className="header__li"><Link to="price" onClick={handleToggle}>Цены</Link></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <p className="footer_info">
          «Груминг студия Felix», адрес: пр. Строителей, 12, Телефоны: +7 (904) 5440167 <br/>
          <a href="https://felix-groom.ru/security">Политика информационной безопасности</a> <br/>
          © «Груминг студия Felix», 2014-2024
        </p>
        <div className="footer__list">
          <a href="https://vk.com"><img className="footer__media" src={imgPath("vk.png")} alt="vk" /></a>
          <a href="https://web.telegram.org"><img className="footer__media" src={imgPath("tg.png")} alt="tg" /></a>
          <a><img className="footer__media" src={imgPath("email.png")} alt="email" /></a>
          <a><img className="footer__media" src={imgPath("phone.png")} alt="phone" /></a>
        </div>
      </Container>
    </footer>
  )
}
