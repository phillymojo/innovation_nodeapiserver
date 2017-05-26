import express from 'express';
import routes from './routes/index';

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine());

app.set('port', process.env.PORT || 6161);

app.use('/', routes);

app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${app.get('port')}`);
});
