const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/calculator.html');
});

require('./routes/bmiRoutes')(app);

app.listen(port, () => {
    console.log(`BMI calculator is running on port ${port}`);
});
