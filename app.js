var express = require('express'),
    app = express();

app.get('/hello-world', function (req, res) {
  res.json({ okay: true });
});

app.listen(3000);
