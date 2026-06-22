import { useState } from 'react';
import styles from './ContactPage.module.css';

const IconPin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const IconMail = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const IconWhatsapp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const IconInstagram = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const CONTATOS = [
  {
    Icon: IconPin,
    label: 'Localização',
    lines: ['Florianópolis - SC', 'Rua Desembargador Vitor Lima, 260'],
  },
  {
    Icon: IconClock,
    label: 'Horário de funcionamento',
    lines: ['Seg a Dom das 14h às 21h', 'Cozinha até às 20:30h', 'Feriados sujeitos à alteração'],
  },
  {
    Icon: IconMail,
    label: 'E-mail',
    lines: ['contato@blackcatcoffee.sc'],
  },
  {
    Icon: IconWhatsapp,
    label: 'WhatsApp',
    lines: ['(48) 99888-1234'],
  },
  {
    Icon: IconInstagram,
    label: 'Instagram',
    lines: ['@blackcatcoffee.sc'],
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ nome: '', email: '', assunto: '', mensagem: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* ── LADO ESQUERDO ── */}
        <div className={styles.left}>
          <h2 className={styles.leftTitle}>Fale conosco</h2>
          <div className={styles.divider} />
          <ul className={styles.infoList}>
            {CONTATOS.map(({ Icon, label, lines }) => (
              <li key={label} className={styles.infoItem}>
                <span className={styles.infoIcon}><Icon /></span>
                <div>
                  <p className={styles.infoLabel}>{label}</p>
                  {lines.map((l) => (
                    <p key={l} className={styles.infoLine}>{l}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── LADO DIREITO ── */}
        <div className={styles.right}>
          <h2 className={styles.rightTitle}>Envie uma mensagem</h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <input
                className={styles.input}
                type="text"
                name="nome"
                placeholder="Nome"
                value={form.nome}
                onChange={handleChange}
                required
              />
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              className={styles.input}
              type="text"
              name="assunto"
              placeholder="Assunto"
              value={form.assunto}
              onChange={handleChange}
              required
            />

            <textarea
              className={styles.textarea}
              name="mensagem"
              placeholder="Mensagem"
              value={form.mensagem}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className={styles.btn}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR MENSAGEM →'}
            </button>

            {status === 'success' && (
              <p className={styles.successMsg}>Mensagem enviada! Responderemos o mais breve possível.</p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>Erro ao enviar. Tente novamente.</p>
            )}
            {status === null && (
              <p className={styles.hint}>Responderemos o mais breve possível.</p>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}