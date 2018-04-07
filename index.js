const app = require('express')();
var todoRoutes = require('./routes/todos')

const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', (req, res) => res.send('Greetings from the root route!'));
app.use('/apis/todos', todoRoutes);


app.listen('3000', () => console.log('app starting on port 3000!' + todoRoutes));
