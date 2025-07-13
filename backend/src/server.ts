import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

//rota:listar atrações
app.get('/api/atracoes', (req, res) => {
  res.json([
    { nome: 'Spa', descricao: 'Área de relaxamento com massagem' },
    { nome: 'Piscina', descricao: 'Piscina climatizada com bar' }
  ]);
});

// rota visualizar detalhes de uma atração
app.get('/api/atracoes/:nome', (req, res) => {
  const { nome } = req.params;
  res.json({ nome, descricao: `Detalhes da atração ${nome}` });
});

// rota ver avaliações da atração
app.get('/api/atracoes/:nome/avaliacoes', (req, res) => {
  const { nome } = req.params;
  res.json([
    { nomeUsuario: 'Ana', nota: 5, comentario: 'Muito bom', data: '2025-07-05' }
  ]);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
