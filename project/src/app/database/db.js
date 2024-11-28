import pkg from 'pg';
const { Pool } = pkg;
import 'dotenv/config';

async function connect(){

    if(global.connection)
        return global.connection.connect();

    const pool = new Pool({
        connectionString: 'postgresql://postgres:root@localhost:5432/Sistema_de_Reserva'
    })
    
    global.connection = pool;
    return pool.connect();

}

connect();

export default connect;
