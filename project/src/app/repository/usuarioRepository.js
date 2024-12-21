import usuario from '../models/usuario.js';

class usuarioRepository{

    async findByEmail(email){
        const result = await usuario.findOne({where: {email: email}});

        return result;
    }

    async findAll(){
        return await usuario.findAll();
    }

    async findById(id){
        return await usuario.findByPk(id);
    }

    async createUser(user){
        const {nome, email, senha, tipo} = user;
        return await usuario.create({nome, email, senha, tipo});
    }

    async editUser(id, editUser){
        const {nome, email, senha, tipo} = editUser;
        const usuarioEditado = await usuario.findByPk(id);

        if(!usuarioEditado){
            throw new Error("Usuario não encontrado!");
        }

        return await usuarioEditado.update({nome, email, senha, tipo});
    }

    async deleteUser(id){
        const UserDelete = await usuario.findByPk(id);

        if(!UserDelete){
            throw new Error("Usuario não encontrado!")
        }

        return await UserDelete.destroy();   
    }
}

export default new usuarioRepository();
