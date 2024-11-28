import repository from '../repository/usuarioRepository.js';

class usuarioController{
    async findAll(req, res){
        const usuarios = await repository.findAll();
        return res.json(usuarios);
    }

    async findById(req, res){
        const usuarios = await repository.findById(req.params.id);
        return res.json(usuarios);
    }

    async createUser(req, res){
        const newUser = await repository.create(req.body);
        return res.json(newUser);
    }

    async editUser(req, res){
        const editUser = await repository.editUser(req.body, req.params.id);
        return res.json(editUser);
    }

    async deleteUser(req, res){
        const user = await repository.delete(req.params.id);
        return res.json(user);
    }
}

export default new usuarioController();
