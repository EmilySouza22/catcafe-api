const { validateRegister } = require('../../src/components/validator.js');

//Sucess
test('Validação usuário criado com sucesso', () => {
	expect(
		validateRegister({
			name: 'Emily Souza',
			email: 'emily@gmail.com',
			password: 'gato123',
			phone: '11912345678',
		}),
	).toBe(true);
});

//Name
test('Validação de nome com números', () => {
	expect(
		validateRegister({
			name: 1,
			email: 'emily@gmail.com',
			password: 'Gato1233',
			phone: '11912345678',
		}),
	).toBe(false);
});

/////////////////////////////////////////////////////////
test('Validação de nome com números dentro de string', () => {
	expect(
		validateRegister({
			name: 'emily1',
			email: 'emily@gmail.com',
			password: 'gato123',
			phone: '11912345678',
		}),
	).toBe(false);
});

test('Validação de nome com string vazia', () => {
	expect(
		validateRegister({
			name: '',
			email: 'emily@gmail.com',
			password: 'gato123',
			phone: '11912345678',
		}),
	).toBe(false);
});

test('Validação de nome com caracteres especiais', () => {
	expect(
		validateRegister({
			name: 'emily?',
			email: 'emily@gmail.com',
			password: 'gato123',
			phone: '11912345678',
		}),
	).toBe(false);
});

// //Email
// test('Formato válido de email', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilygmail.com',
// 			password: 'gato123',
// 			phone: '11912345678',
// 		}),
// 	).toBe(false);
// });

// test('Validação de email sem @', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilygmail.com',
// 			password: 'gato123',
// 			phone: '11912345678',
// 		}),
// 	).toBe(false);
// });

// test('Sem caracteres especiais inválidos', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emily?souza@gmail.com',
// 			password: 'gato123',
// 			phone: '11912345678',
// 		}),
// 	).toBe(false);
// });

// test('Validação de email vazio', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: '',
// 			password: 'gato123',
// 			phone: '11912345678',
// 		}),
// 	).toBe(false);
// });

// test('Validação de espaços no email', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emily souza@gmail.com',
// 			password: 'gato123',
// 			phone: '11912345678',
// 		}),
// 	).toBe(false);
// });

// //Password
// test('Ser obrigatóriamente uma string', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilysouza@gmail.com',
// 			password: 1235875,
// 			phone: '11912345678',
// 		}),
// 	).toBe(false);
// });

// test('Password não pode ser vazia', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilysouza@gmail.com',
// 			password: '',
// 			phone: '11912345678',
// 		}),
// 	).toBe(false);
// });

// test('Password não pode ser menor que 8 caracteres', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilysouza@gmail.com',
// 			password: 'gato123',
// 			phone: '11912345678',
// 		}),
// 	).toBe(false);
// });

// test('Password não pode ser maior que 255 caracteres', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilysouza@gmail.com',
// 			password:
// 				'A1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
// 			phone: '11912345678',
// 		}),
// 	).toBe(false);
// });

// test('Password contém pelo menos uma letra maiúscula', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilysouza@gmail.com',
// 			password: 'gato12345',
// 			phone: '11912345678',
// 		}),
// 	).toBe(false);
// });

// test('Password contém pelo menos uma letra minúscula', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilysouza@gmail.com',
// 			password: 'GATO12345',
// 			phone: '11912345678',
// 		}),
// 	).toBe(false);
// });

// test('Password contém pelo menos um número', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilysouza@gmail.com',
// 			password: 'Gatolaranja',
// 			phone: '11912345678',
// 		}),
// 	).toBe(false);
// });

// test('deve validar password corretamente', () => {
// 	expect(validarRegister(senha)).toBe(true);
// });

// test('Ser obrigatóriamente uma string', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilysouza@gmail.com',
// 			password: 'gato123',
// 			phone: 1191234567,
// 		}),
// 	).toBe(false);
// });

// //Phone
// test('Ser obrigatóriamente uma string', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilysouza@gmail.com',
// 			password: 'gato123',
// 			phone: 1191234567,
// 		}),
// 	).toBe(false);
// });

// test('Não pode ter letras', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilysouza@gmail.com',
// 			password: 'gato123',
// 			phone: '11912345a78',
// 		}),
// 	).toBe(false);
// });

// test('Não ser vazio', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilysouza@gmail.com',
// 			password: 'gato123',
// 			phone: '',
// 		}),
// 	).toBe(false);
// });

// test('Não pode ter caracteres especiais', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilysouza@gmail.com',
// 			password: 'gato123',
// 			phone: '1191@345678',
// 		}),
// 	).toBe(false);
// });

// test('Sem espaços inválidos', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilysouza@gmail.com',
// 			password: 'gato123',
// 			phone: '11912 345678',
// 		}),
// 	).toBe(false);
// });

// test('Validação de tamanho máximo de até 20 caracteres', () => {
// 	expect(
// 		validateRegister({
// 			name: 'Emily Souza',
// 			email: 'emilysouza@gmail.com',
// 			password: 'gato123',
// 			phone: '119123456781245678911',
// 		}),
// 	).toBe(false);
// });
