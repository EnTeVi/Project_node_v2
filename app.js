const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/welcome', (req, res) => {
    res.send('dsfsdgds')
    res.end();
})

const users = [
    {
        name: 'Oleh',
        age: 18,
        gender: 'male'
    },
    {
        name: 'Dima',
        age: 19,
        gender: 'male'
    },
    {
        name: 'Alisa',
        age: 20,
        gender: 'female'
    },
    {
        name: 'Victor',
        age: 22,
        gender: 'female'
    },
    {
        name: 'Cocos',
        age: 82,
        gender: 'mixed'
    }
]

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
    const user = users[+userId];
    res.json(user);
})

app.post('/users', (req, res) => {
    const body = req.body;
    users.push(body);
    res.json({
        message: 'User created!!!'
    })
})

app.put('/users', (req, res) => {
    const {userId} = req.params;
    const updateUser = req.body;
    users[+userId] = updateUser;
    res.status(300).json({
        message: 'kurva math update',
        data: users[+userId]
    })
})

app.delete('/users/:userId', (req, res) => {
    const {userId} = req.params;
    users.splice(+userId, 1);
    res.status(200).json({
        message: 'User delete bich'
    })
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server to started if you give me ${PORT} dollars, else I kill you`);
});








































































// const event = require('node:events');
//
// const eventEmitter = new event();
//
// eventEmitter.on('click', (data) => {
//     console.log('Click on me, mutherfucker');
//     console.log(data);
// }); /*можна викликати багато раз*/

// eventEmitter.emit('click', {name: 'Patron'});

// eventEmitter.once('clickOne', (data) => {
//     console.log(data);
//     console.log('This is emmit enter one return');
// }) /*можна викликати один раз*/
//
// eventEmitter.emit('clickOne', {name: 'Niger'});


// streem
// типи стрімів read, write, duplex, transform

// const fs = require('fs');
// const path = require("path");
//
// const readStream = fs.createReadStream(path.join('test', 'text.txt'));
// // прийом нового шляху для чанків і перезаписування
// const writeStream = fs.createWriteStream(path.join('test', 'text3.txt'))
//
// // записування
// // readStream.on('data', (chunk) => {
// //     writeStream.write(chunk);
// // })
//
// const handleError = () => {
//     console.log('Error!');
//     // знищення readstream
//     readStream.destroy();
//     writeStream.end('Error white reading file');
// }
//
// // простіше записування
// readStream
//     .on('error m', handleError)
//     .pipe(writeStream);