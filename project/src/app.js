import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {res.send(console.log('Teste'))})

app.listen(8080,(()=>{console.log("Servidor Iniciado na porta 8080")}))

export default app;
