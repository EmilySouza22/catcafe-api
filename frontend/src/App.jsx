import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Footer from '../src/components/layouts/Footer';
import HomePage from '../src/pages/Home/HomePage';
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
      <Navbar />
      <Routes>
        <Route path="/"        element={<Navigate to="/home" replace />} />
        <Route path="/home"    element={<HomePage />} />
        <Route path="/sobre"   element={<PlaceholderPage title="Sobre Nós" />} />
        <Route path="/gatos"   element={<PlaceholderPage title="Nossos Gatos" />} />
        <Route path="/cardapio" element={<PlaceholderPage title="Cardápio" />} />
        <Route path="/eventos" element={<PlaceholderPage title="Eventos" />} />
        <Route path="/adocao"  element={<PlaceholderPage title="Adoção" />} />
        <Route path="/gatil"   element={<PlaceholderPage title="Taxa de Visitação" />} />
        <Route path="/contato" element={<PlaceholderPage title="Contato" />} />
        <Route path="/login"   element={<PlaceholderPage title="Login" />} />
        <Route path="/register" element={<PlaceholderPage title="Cadastro" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}