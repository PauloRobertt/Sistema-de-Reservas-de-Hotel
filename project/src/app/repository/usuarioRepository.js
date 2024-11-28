import connect from '../database/db.js';

class usuarioRepository{

    async findAll(){
        const client = await connect();
        const result = await client.query('SELECT * FROM usuarios');
        return result.rows;
    }

    async findById(id){
        const client = await connect();
        const result = await client.query('SELECT * FROM usuarios WHERE id = $1', [id]);
        return result.rows;
    }

    async create(usuario){
        const client = await connect();
        const result = await client.query('insert into usuarios(nome, email, senha, tipo) values($1, $2, $3, $4)', [usuario.nome, usuario.email, usuario.senha, usuario.tipo]);
        return result.rows;
    }

    async editUser(usuario, id){
        const client = await connect();
        const result = await client.query('UPDATE usuarios SET nome=$1, email=$2, senha=$3, tipo=$4 WHERE id=$5', [usuario.nome, usuario.email, usuario.senha, usuario.tipo, id]);
        return result.rows;
    }

    async delete(id){
        const client = await connect();
        const result = await client.query('delete from usuarios where id = $1', [id]);
        return result.rows;    
    }
}

export default new usuarioRepository();
