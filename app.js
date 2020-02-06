const express = require('express');
const chalk = require('chalk');
const app = express();
const path = require('path');
const uuid = require('uuid/v4');

const users = require('./models/Users');
// const { logMe } = require('./middleware/logger');
// const { myMoment } = require('./middleware/moment');

const port = process.env.PORT || 3000;

const userRoutes = require('./routes/userRoutes');

//! Middleware: a function we create, will need app.use()
// app.use(logMe);
// app.use(myMoment);
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);

//! Routes
// app.get('/', (req, res) => {
//     res.send(path.join(__dirname, 'public'));
// });

app.get('/', (req, res) => {
    res.send('hello express');
});

app.listen(port, () =>
    console.log(chalk.blueBright(`App listening on ${port}`))
);
