import express from 'express';
import usuarioController from './app/controllers/usuarioController.js';
import authenticationController from './app/controllers/authenticationController.js';
const router = express.Router();

//Rotas CRUD Usuario
router.get('/usuario', usuarioController.findAll);
router.get('/usuario/:id', usuarioController.findById);
router.post('/usuario', usuarioController.createUser);
router.put('/usuario/:id', usuarioController.editUser);
router.delete('/usuario/:id', usuarioController.deleteUser);

router.post('/auth/login', authenticationController.login);
router.post('/auth/register', authenticationController.register);

export default router;
