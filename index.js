// importing packages
const express = require('express');
const cors = require('cors');
const app = express();
const greet = require('./routes/greet');
// middlewares
app.use(express.json());
app.use(cors());
// adding routes
app.use('/greet', greet);
app.get('/', (req, res) => {
	res.json('Welcome to the API');
});
// port
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));