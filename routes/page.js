import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

const router = express.Router();

router.use((req,res,next) => {
  res.setHeader('content-type', 'text/html');
  next();
});

// returns a full page rendered via React
router.get('/', (req, res) => {
  res.render('main', {
    pageName: 'Main', 
    title: 'Main', 
    description: 'This is a fully rendered page' 
  });
});

router.get('/language_tunnel', (req, res) => {
  res.render('language_tunnel', {
    pageName: 'Language Tunnel',
    title: 'Language Tunnel'
  });
})

router.get('/sample', (req, res) => {
  res.render('sample', {

  });
})

export default router; 
