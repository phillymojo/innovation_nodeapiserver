const express = require('express');
const app = express();

const reactDomServer = require('react-dom/server');

const routes = require('./routes/index');

app.set('port', process.env.PORT || 6161);

app.use('/', routes);

app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${app.get('port')}`);
});
