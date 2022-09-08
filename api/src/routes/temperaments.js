const { Router } = require('express');
const db = require('../db');
const router = Router();
const { getTemperaments } = require('../Controllers/TemperamentsApiDb')

router.get('/', getTemperaments)


module.exports = router;