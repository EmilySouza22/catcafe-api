import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useLocation,
} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import HomePage from './pages/Home/HomePage';
import GatosPage from './pages/Gatos/GatosPage';
import CardapioPage from './pages/Cardapio/CardapioPage';
import SobrePage from './pages/Sobre/SobrePage';
import ContactPage from './pages/Contact/ContactPage';
import AdocaoPage from './pages/adoption/AdocaoPage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import './styles/global.css';

const AUTH_ROUTES = ['/login', '/register'];

function PlaceholderPage({ title }) {
	return (
		<div
			style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '60vh' }}
		>
			<h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem' }}>
				{title}
			</h2>
			<p style={{ color: '#7A7068', marginTop: '1rem' }}>
				Página em construção...
			</p>
		</div>
	);
}

function Layout() {
	const { pathname } = useLocation();
	const isAuth = AUTH_ROUTES.includes(pathname);

	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
		>
			<Navbar />
			<main style={{ flex: 1 }}>
				<Routes>
					<Route path="/" element={<Navigate to="/login" replace />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/sobre" element={<SobrePage />} />
					<Route path="/gatos" element={<GatosPage />} />
					<Route path="/cardapio" element={<CardapioPage />} />
					<Route path="/adocao" element={<AdocaoPage />} />
					<Route
						path="/gatil"
						element={<PlaceholderPage title="Taxa de Visitação" />}
					/>
					<Route path="/contato" element={<ContactPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
				</Routes>
			</main>
			{!isAuth && <Footer />}
		</div>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	);
}
