const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar requisições JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo à API de exemplo!');
});

// Rota para obter uma lista de itens
app.get('/api/items', (req, res) => {
  const items = ['item1', 'item2', 'item3'];
  res.json(items);
});

// Rota para adicionar um novo item
app.post('/api/items', (req, res) => {
  const newItem = req.body.item;
  // Aqui você pode processar o novo item como desejar
  res.json({ message: 'Item adicionado com sucesso', newItem });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
