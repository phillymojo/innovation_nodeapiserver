import express from 'express';
import React from 'react';
import LanguageTunnelContainer from './../src/components/LanguageTunnelContainer/LanguageTunnelContainer.js';
import { renderToString } from 'react-dom/server';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('<a href="http://localhost:6161/language_tunnel">Go to React Language Tunnel</a>');
});
router.get('/language_tunnel', (req,res) => {
  res.send(renderToString(<LanguageTunnelContainer />));
});
router.get('/main', (req, res) => {
  res.render('index', {pageName: 'Main'});
});

export default router;
