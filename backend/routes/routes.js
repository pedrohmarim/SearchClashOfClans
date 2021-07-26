const express = require('express')
const router = express.Router();

const searchUserController = require('../Controllers/searchUserController');

router.get('/searchUser', searchUserController.search);

module.exports = router