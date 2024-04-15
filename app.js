const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set up body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set view engine
app.set('view engine', 'ejs');

// Dummy user data (can be replaced with database)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Login route
app.get('/login', (req, res) => {
    res.render('login');
});

// Login post route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.send(`Welcome, ${username}!`);
    } else {
        res.send('Invalid username or password');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});