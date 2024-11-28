import express from 'express';
import usuarioController from './app/controllers/usuarioController.js';
const router = express.Router();

router.get('/usuario', usuarioController.findAll);
router.get('/usuario/:id', usuarioController.findById);
router.post('/usuario', usuarioController.createUser);
router.put('/usuario/:id', usuarioController.editUser);
router.delete('/usuario/:id', usuarioController.deleteUser);

export default router;
