const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('WOW, I m excited to learn node and express with nodemon')
})

const users = [
    {id:0,name:'Shabana',email:'shabana@gmial.com',phone:'01485251120'},
    {id:1,name:'Susmita',email:'susmita@gmial.com',phone:'01485251120'},
    {id:2,name:'Suniya',email:'suniya@gmial.com',phone:'01485251120'},
    {id:3,name:'Subnoor',email:'subnoor@gmial.com',phone:'01485251120'},
    {id:4,name:'Shisir',email:'shisir@gmial.com',phone:'01485251120'},
    {id:5,name:'Salma',email:'salma@gmial.com',phone:'01485251120'},
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }

})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting post',newUser);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(port, () => {
    console.log('I m localhost', port)
})