//Server
const authRoutes = require('./src/routes/auth.js');
const userRoutes = require('./src/routes/user.js');
const contatoRoutes = require('./routers/contato.js');
const adocaoRouter = require('./routers/adocaoRouter');
const cardapioRouter = require('./routers/cardapioRouter.js');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/api/contato', contatoRoutes);
app.use('/api/cardapio', cardapioRouter);
app.use('/api/adocao', adocaoRouter);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
