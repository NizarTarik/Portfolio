const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'NizarTarik.html'));
});

app.get('/:page', (req, res) => {
    const pagePath = path.join(__dirname, 'public', req.params.page + '.html');
    res.sendFile(pagePath, function (err) {
        if (err) {
            res.status(404).send('Page not found');
        }
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
