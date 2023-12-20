const express = require('express');
const Controller = require('../Controller/controller');

const router = express.Router();

router.get('/', Controller.getProducts);
router.get('/:prodID', Controller.getProductById);

router.post('/', Controller.saveProduct);

router.put('/', Controller.updateProduct);

router.delete('/:prodID', Controller.deleteProductById)

module.exports = router;