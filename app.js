const express = require('express');
const app = express();

app.set('port', process.env.PORT || 6161);

app.get('/', (req,res) => {
  res.send('<h1>Hello world!</h1>');
})

app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${app.get('port')}`);
});
