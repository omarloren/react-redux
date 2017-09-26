var express = require('express'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 3000;
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, function () {
    console.log("App listening on port ", port);
});
