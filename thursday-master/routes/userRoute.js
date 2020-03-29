'use strict';
// userRoute

const express = require('express');//lisätään express niminen moduuli
const router = express.Router();//
const userController = require('../controllers/userController');

router.get('/', userController.user_list_get);//userControllerista saadaan /middlevare funktio jota kutsutaan get metodilla

router.get('/:id', userController.user_get);

router.post('/', userController.user_post);

router.put('/', (req, res) => {
  res.send('With this endpoint you can edit users');
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete users');
});


module.exports = router;
