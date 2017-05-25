const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});
router.get('/language_tunnel', (req,res) => {
  res.send('<h2>Language Tunnel</h2>');
})

module.exports = router;