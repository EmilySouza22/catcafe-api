import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './AuthPage.module.css';

export default function LoginPage() {
	const navigate = useNavigate();
	const [form, setForm] = useState({ email: '', password: '' });
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setError('');
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError('');

		try {
			const res = await fetch('/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			});

			const data = await res.json();

			if (!res.ok) {
				setError(data.message || 'Usuário ou senha inválidos');
				return;
			}

			localStorage.setItem('accessToken', data.accessToken);
			localStorage.setItem('refreshToken', data.refreshToken);
			navigate('/home');
		} catch {
			setError('Erro de conexão. Tente novamente.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={styles.page}>
			<div className={styles.overlay} />

			<div className={styles.card}>
				<div className={styles.brand}>
					<img
						src="/logo-catcafeapi.png"
						alt="Black Cat & Coffee"
						className={styles.logo}
					/>
				</div>

				<h1 className={styles.title}>Entrar</h1>
				<p className={styles.subtitle}>Bem-vindo de volta 🐾</p>

				<form onSubmit={handleSubmit} className={styles.form} noValidate>
					<div className={styles.field}>
						<label htmlFor="email" className={styles.label}>
							E-mail
						</label>
						<input
							id="email"
							name="email"
							type="email"
							autoComplete="email"
							required
							value={form.email}
							onChange={handleChange}
							className={styles.input}
							placeholder="seu@email.com"
						/>
					</div>

					<div className={styles.field}>
						<label htmlFor="password" className={styles.label}>
							Senha
						</label>
						<input
							id="password"
							name="password"
							type="password"
							autoComplete="current-password"
							required
							value={form.password}
							onChange={handleChange}
							className={styles.input}
							placeholder="••••••••"
						/>
					</div>

					{error && (
						<p id="error-message" className={styles.error} role="alert">
							{error}
						</p>
					)}

					<button type="submit" className={styles.btn} disabled={loading}>
						{loading ? 'Entrando...' : 'Entrar'}
					</button>
				</form>

				<p className={styles.footer}>
					Não tem conta?{' '}
					<Link to="/register" className={styles.link}>
						Cadastre-se
					</Link>
				</p>
			</div>
		</div>
	);
}
