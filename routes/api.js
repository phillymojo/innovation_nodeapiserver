import express from 'express';
import React from 'react';
import LanguageTunnelContainer from './../src/components/LanguageTunnelContainer/LanguageTunnelContainer.js';
import { renderToString } from 'react-dom/server';

const router = express.Router();

router.use((req,res,next) => {
  res.setHeader('content-type', 'text/plain');
  next();
});

// returns a simple text string
router.get('/', (req, res) => {
	res.send('<a href="http://localhost:6161/language_tunnel">Go to React Language Tunnel</a>');
});

// returns a text string that is rendered via React component
router.get('/language_tunnel', (req,res) => {
  res.send(renderToString(<LanguageTunnelContainer />));
});

export default router;