import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import HomePage from './pages/Home/HomePage';
import GatosPage from './pages/Gatos/GatosPage';
import CardapioPage from './pages/Cardapio/CardapioPage';
import SobrePage from './pages/Sobre/SobrePage';
import ContactPage from './pages/Contact/ContactPage';
import AdocaoPage from './pages/adoption/AdocaoPage';
import './styles/global.css';

function PlaceholderPage({ title }) {
  return (
    <div style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem' }}>{title}</h2>
      <p style={{ color: '#7A7068', marginTop: '1rem' }}>Página em construção...</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/"         element={<Navigate to="/home" replace />} />
            <Route path="/home"     element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/gatos" element={<GatosPage />} />
            <Route path="/cardapio" element={<CardapioPage />} />
            <Route path="/adocao" element={<AdocaoPage />} />
            <Route path="/gatil"    element={<PlaceholderPage title="Taxa de Visitação" />} />
            <Route path="/contato"  element={<ContactPage />} />
            <Route path="/login"    element={<PlaceholderPage title="Login" />} />
            <Route path="/register" element={<PlaceholderPage title="Cadastro" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}