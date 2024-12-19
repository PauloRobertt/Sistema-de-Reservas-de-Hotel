import repository from "../repository/usuarioRepository.js";

class usuarioService{
    async findAll(){
        return await repository.findAll();
    }

    async findById(id){
        if(!id){
            throw new Error('O ID é obrigatorio!');
        }

        try{
            const user = await repository.findById(id);
            if(!user){
                throw new Error('Usuario não encontrado!');
            }

            return user;
        }
        catch(error) {
            throw new Error(`Erro ao realizar a busca do usuario: ${error}`);
        }
    }

    async createUser(user){
        try{
            const {nome, email, senha} = user;

            if(!nome || !email || !senha){
                throw new Error('Todos os campos são obrigatórios!');
            }
    
            return await repository.createUser(user);
        }
        catch(error){
            throw new Error(`Erro ao criar o usuario: ${error}`);
        }
    }

    async editUser(id, editUser){
        try{
            return await repository.editUser(id, editUser);
        }
        catch(error){
            throw new Error(`Erro ao editar o usuario: ${error}`);
        }
    }

    async deleteUser(id){
        return await repository.deleteUser(id);
    }
    
}

export default new usuarioService();