const { validateRegister } = require('../api/src/components/validator');

// ─── Success ──────────────────────────────────────────────────────────────────

test('Validação usuário criado com sucesso', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emily@gmail.com',
			password: 'Gato1233',
			phone: '11912345678',
		}),
	).toBe(true);
});

// ─── Name ─────────────────────────────────────────────────────────────────────

test('Validação de nome com números (tipo number)', () => {
	expect(
		validateRegister({
			name: 1,
			email: 'emily@gmail.com',
			password: 'Gato1233',
			phone: '11912345678',
		}),
	).toBe(false);
});

test('Validação de nome com números dentro de string', () => {
	expect(
		validateRegister({
			name: 'emily1',
			email: 'emily@gmail.com',
			password: 'Gato1233',
			phone: '11912345678',
		}),
	).toBe(false);
});

test('Validação de nome com string vazia', () => {
	expect(
		validateRegister({
			name: '',
			email: 'emily@gmail.com',
			password: 'Gato1233',
			phone: '11912345678',
		}),
	).toBe(false);
});

test('Validação de nome com caracteres especiais', () => {
	expect(
		validateRegister({
			name: 'emily?',
			email: 'emily@gmail.com',
			password: 'Gato1233',
			phone: '11912345678',
		}),
	).toBe(false);
});

// ─── Email ────────────────────────────────────────────────────────────────────

test('Validação de email sem @', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emilygmail.com',
			password: 'Gato1233',
			phone: '11912345678',
		}),
	).toBe(false);
});

test('Sem caracteres especiais inválidos no email', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emily?souza@gmail.com',
			password: 'Gato1233',
			phone: '11912345678',
		}),
	).toBe(false);
});

test('Validação de email vazio', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: '',
			password: 'Gato1233',
			phone: '11912345678',
		}),
	).toBe(false);
});

test('Validação de espaços no email', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emily souza@gmail.com',
			password: 'Gato1233',
			phone: '11912345678',
		}),
	).toBe(false);
});

// ─── Password ─────────────────────────────────────────────────────────────────

test('Password deve ser string', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emilysouza@gmail.com',
			password: 1235875,
			phone: '11912345678',
		}),
	).toBe(false);
});

test('Password não pode ser vazia', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emilysouza@gmail.com',
			password: '',
			phone: '11912345678',
		}),
	).toBe(false);
});

test('Password não pode ser menor que 8 caracteres', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emilysouza@gmail.com',
			password: 'Gato12',
			phone: '11912345678',
		}),
	).toBe(false);
});

test('Password não pode ser maior que 255 caracteres', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emilysouza@gmail.com',
			password: 'A1' + 'a'.repeat(254),
			phone: '11912345678',
		}),
	).toBe(false);
});

test('Password deve conter pelo menos uma letra maiúscula', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emilysouza@gmail.com',
			password: 'gato12345',
			phone: '11912345678',
		}),
	).toBe(false);
});

test('Password deve conter pelo menos uma letra minúscula', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emilysouza@gmail.com',
			password: 'GATO12345',
			phone: '11912345678',
		}),
	).toBe(false);
});

test('Password deve conter pelo menos um número', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emilysouza@gmail.com',
			password: 'Gatolaranja',
			phone: '11912345678',
		}),
	).toBe(false);
});

test('Password válida deve ser aceita', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emilysouza@gmail.com',
			password: 'Gato12345',
			phone: '11912345678',
		}),
	).toBe(true);
});

// ─── Phone ────────────────────────────────────────────────────────────────────

test('Phone deve ser string', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emilysouza@gmail.com',
			password: 'Gato12345',
			phone: 1191234567,
		}),
	).toBe(false);
});

test('Phone não pode ter letras', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emilysouza@gmail.com',
			password: 'Gato12345',
			phone: '11912345a78',
		}),
	).toBe(false);
});

test('Phone não pode ser vazio', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emilysouza@gmail.com',
			password: 'Gato12345',
			phone: '',
		}),
	).toBe(false);
});

test('Phone não pode ter caracteres especiais', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emilysouza@gmail.com',
			password: 'Gato12345',
			phone: '1191@345678',
		}),
	).toBe(false);
});

test('Phone não pode ter espaços', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emilysouza@gmail.com',
			password: 'Gato12345',
			phone: '11912 345678',
		}),
	).toBe(false);
});

test('Phone não pode ter mais de 20 caracteres', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emilysouza@gmail.com',
			password: 'Gato12345',
			phone: '119123456781245678911',
		}),
	).toBe(false);
});
