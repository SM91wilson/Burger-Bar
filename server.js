const express = require('express');

const app = express();
const port = 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.listen(port, function () {
    console.log("App listening on port " + port);
});