const request = require('supertest');
const bcrypt = require('bcrypt');

jest.mock('../api/src/repositories/user');
const UserRepository = require('../api/src/repositories/user');

const app = require('../api/app');

const HASHED_ADMIN = bcrypt.hashSync('Admin123', 10);

const MOCK_ADMIN = {
	id: 1,
	name: 'Admin',
	email: 'admin@catcafe.com',
	password: HASHED_ADMIN,
	role: 'admin',
};

beforeEach(() => {
	jest.clearAllMocks();
});

describe('POST /auth/login', () => {
	test('Login com credenciais válidas retorna tokens', async () => {
		UserRepository.findByEmail.mockResolvedValue(MOCK_ADMIN);

		const res = await request(app)
			.post('/auth/login')
			.send({ email: 'admin@catcafe.com', password: 'Admin123' });

		expect(res.status).toBe(200);
		expect(res.body.success).toBe(true);
		expect(res.body).toHaveProperty('accessToken');
		expect(res.body).toHaveProperty('refreshToken');
	});

	test('Login com senha incorreta retorna 401', async () => {
		UserRepository.findByEmail.mockResolvedValue(MOCK_ADMIN);

		const res = await request(app)
			.post('/auth/login')
			.send({ email: 'admin@catcafe.com', password: 'senha_errada' });

		expect(res.status).toBe(401);
		expect(res.body.success).toBe(false);
		expect(res.body.message).toBe('Credenciais inválidas');
	});

	test('Login com email inexistente retorna 401', async () => {
		UserRepository.findByEmail.mockResolvedValue(null);

		const res = await request(app)
			.post('/auth/login')
			.send({ email: 'naoexiste@catcafe.com', password: 'Admin123' });

		expect(res.status).toBe(401);
		expect(res.body.success).toBe(false);
		expect(res.body.message).toBe('Credenciais inválidas');
	});

	test('Login sem body retorna erro', async () => {
		UserRepository.findByEmail.mockResolvedValue(null);

		const res = await request(app).post('/auth/login').send({});

		expect(res.status).toBe(401);
		expect(res.body.success).toBe(false);
	});
});

describe('POST /auth/logout', () => {
	test('Logout retorna sucesso', async () => {
		const res = await request(app).post('/auth/logout');

		expect(res.status).toBe(200);
		expect(res.body.success).toBe(true);
	});
});
