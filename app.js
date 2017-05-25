const express = require('express');
const app = express();

app.set('port', process.env.PORT || 6161);

app.get('/', (req,res) => {
  res.send('Hello world');
})

app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${app.get('port')}`);
});
