import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Pricelist from './pages/Pricelist';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="price" element={<Pricelist />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
