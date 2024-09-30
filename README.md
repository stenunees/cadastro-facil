

# Cadastro Fácil

Cadastro Fácil é uma aplicação fullstack que permite aos usuários se cadastrarem fornecendo informações como nome, email, telefone e uma mensagem. Esta aplicação utiliza o Node.js para o backend e MongoDB para armazenamento de dados.

## Funcionalidades
- Cadastro de usuários com nome, email, telefone e mensagem.
- Feedback ao usuário após o cadastro (sucesso ou erro).

## Tecnologias Utilizadas
- **Frontend**: HTML, CSS, Bootstrap
- **Backend**: Node.js, Express, Mongoose
- **Banco de Dados**: MongoDB

## Como Usar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/stenunees/cadastro-facil.git
   cd cadastro-facil


2. **Instale as dependências do backend**:
   ```bash
   npm install
   ```

3. **Inicie o servidor**:
   ```bash
   node app.js
   ```

4. **Acesse a aplicação**:
   Abra seu navegador e vá para `http://localhost:3000`.

## Estrutura do projeto

```plaintext
cadastro-facil/
├── public/                # Pasta para arquivos estáticos (HTML, CSS, JS)
│   ├── index.html         # Página principal
│   ├── app.js             # Lógica do frontend
│   └── styles.css         # Estilo da aplicação
├── app.js                 # Configuração do servidor Express
├── package.json           # Dependências do projeto
└── README.md              # Documentação do projeto
```

## API

A aplicação possui um endpoint API para cadastrar usuários:

- **POST** `/api/usuarios`
  - **Body**: 
    ```json
    {
      "nome": "Seu Nome",
      "email": "seuemail@example.com",
      "telefone": "123456789",
      "mensagem": "Sua mensagem"
    }
    ```

  - **Resposta**: 
    - Sucesso: 
      ```json
      {
        "message": "Usuário salvo com sucesso!"
      }
      ```
    - Erro: 
      ```json
      {
        "message": "Não foi possível cadastrar."
      }
      ```

