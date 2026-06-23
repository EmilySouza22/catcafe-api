const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', require('./src/routes/auth'));
app.use('/user', require('./src/routes/user'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
