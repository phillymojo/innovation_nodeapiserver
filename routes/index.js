const express = require('express');
const router = express.Router();
import React from 'react';
const ReactDomServer = require('react-dom/server');

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World!!</h1>
  }
};

router.get('/', (req, res) => {
  res.send(ReactDomServer.renderToString(<HelloWorld />));
});
router.get('/language_tunnel', (req,res) => {
  res.send('<h2>Language Tunnel</h2>');
});

module.exports = router;