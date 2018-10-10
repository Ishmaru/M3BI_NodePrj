const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user_controller');

router.get('/users/', user_controller.user_index);
router.post('/users/create', user_controller.user_create);
router.get('/users/:id', user_controller.user_details);
router.put('/users/:id/update', user_controller.user_update);
router.delete('/users/:id/delete', user_controller.user_delete);

module.exports = router;
