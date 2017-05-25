const express = require('express');
const router = express.Router();
import React from 'react';
import LanguageTunnelContainer from './../src/components/LanguageTunnelContainer/LanguageTunnelContainer.js';
const ReactDomServer = require('react-dom/server');

router.get('/', (req, res) => {
	res.send('<a href="http://localhost:6161/language_tunnel">Go to React Language Tunnel</a>');
});
router.get('/language_tunnel', (req,res) => {
  res.send(ReactDomServer.renderToString(<LanguageTunnelContainer />));
});

module.exports = router;
