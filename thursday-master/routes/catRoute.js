'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: './uploads/'});
const catController = require('../controllers/catController');

router.get('/', catController.cat_list_get); //täältä kutsutaan catControllerin funktiota

router.get('/:id', catController.cat_get);


router.post('/', upload.single('cat'), (req, res) => {
  res.send('With this endpoint you can add cats');
});

/*router.post('/', upload.array('uploads', 12), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})*/


router.put('/', (req, res) => {
  res.send('With this endpoint you can edit cats');
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete cats');
});

module.exports = router;
