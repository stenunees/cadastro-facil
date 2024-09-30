const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;


const Usuario = mongoose.model('Usuario', {
    nome: String,
    email: String,
    telefone: String,
    mensagem: String
});

app.use(express.static('public'));
app.use(express.json());

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.error('Erro ao conectar no MongoDB', err);
});

app.get('/', (req, res) => {
    res.send('Bem-vindo ao meu site fullstack!');
});


app.post('/api/usuarios', async (req, res) => {
    const { nome, email, telefone, mensagem } = req.body; 
    const usuario = new Usuario({ nome, email, telefone, mensagem });

    try {
        await usuario.save();
        res.json({ message: 'Usuário salvo com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao salvar usuário', error });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
