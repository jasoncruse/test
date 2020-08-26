const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
// listen port
app.listen(3000, function (err) {
    if (err) {
        console.error(err)
    } else {
        console.log('Server is runing at 3000')
    }
});