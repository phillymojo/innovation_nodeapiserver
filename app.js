import express from 'express';
import routes_page from './routes/page';
import routes_api from './routes/api';

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine());

app.set('port', process.env.PORT || 6161);

app.use(express.static('styles'))
app.use('/', routes_page);
app.use('/api', routes_api);

app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${app.get('port')}`);
});
