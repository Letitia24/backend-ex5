// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware untuk request body menggunakan body parser
app.use(bodyParser.json());

// Middleware untuk file static
app.use(express.static('public'));

// Middleware untuk file upload
// Contoh middleware untuk file upload tidak disertakan di sini, karena dapat bervariasi tergantung pada kebutuhan

// Middleware untuk penanganan CORS
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, this is your Express API!');
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
