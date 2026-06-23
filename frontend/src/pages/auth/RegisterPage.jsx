import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './AuthPage.module.css';

export default function RegisterPage() {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		phone: '',
	});
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
			const res = await fetch('/auth/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			});

			const data = await res.json();

			if (!res.ok) {
				setError(data.message || 'Erro ao criar conta.');
				return;
			}

			navigate('/login');
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

				<h1 className={styles.title}>Criar conta</h1>

				<form onSubmit={handleSubmit} className={styles.form} noValidate>
					<div className={styles.field}>
						<label htmlFor="name" className={styles.label}>
							Nome
						</label>
						<input
							id="name"
							name="name"
							type="text"
							autoComplete="name"
							required
							value={form.name}
							onChange={handleChange}
							className={styles.input}
							placeholder="Seu nome completo"
						/>
					</div>

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
						<label htmlFor="phone" className={styles.label}>
							Telefone
						</label>
						<input
							id="phone"
							name="phone"
							type="tel"
							autoComplete="tel"
							required
							value={form.phone}
							onChange={handleChange}
							className={styles.input}
							placeholder="11912345678"
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
							autoComplete="new-password"
							required
							value={form.password}
							onChange={handleChange}
							className={styles.input}
							placeholder="Mín. 8 caracteres, maiúscula e número"
						/>
					</div>

					{error && (
						<p id="error-message" className={styles.error} role="alert">
							{error}
						</p>
					)}

					<button type="submit" className={styles.btn} disabled={loading}>
						{loading ? 'Criando conta...' : 'Criar conta'}
					</button>
				</form>

				<p className={styles.footer}>
					Já tem conta?{' '}
					<Link to="/login" className={styles.link}>
						Entrar
					</Link>
				</p>
			</div>
		</div>
	);
}
