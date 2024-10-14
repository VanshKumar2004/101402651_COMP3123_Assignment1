


const express = require('express');
const userRoutes = require('./routes/users');
const employeeRoutes = require('./routes/employees');
const SERVER_PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// mongoDB log-in session settings 
const session = require('express-session');
app.use(session({
    secret: process.env.SESSION_SECRET || 'default-secret',
    resave: false,
    saveUninitialized: true
}));




app.use('/api/v1/user', userRoutes); 
app.use('/api/v1/emp/', employeeRoutes); 


app.use(express.static(path.join(__dirname, 'public'))); 


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html')); 
});


app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
  });


app.listen(SERVER_PORT, () => {
    console.log(`Server running http://localhost:${SERVER_PORT}/`);
});


module.exports = app;
