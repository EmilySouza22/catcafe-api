const { createAccount } = require('../components/user');
const { validateEmail } = require('../components/validator');

const Controller = {};

Controller.handleCreateAccount = async (req, res) => {
	// validações dos dados da requisição

	const userData = req.body;

	try {
		const result = await createAccount(userData);
		return res.status(201).json({
			success: true,
			message: 'Account created successfully.',
			data: result,
		});
	} catch (error) {
        res.status(400).json({
            sucess: false,
            message: error
        })
    }
};

module.exports = Controller;
