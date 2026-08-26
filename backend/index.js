const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/", (req, res) => {
  res.json({
    mensagem: "API de filmes funcionando",
  });
});

app.get("/filmes", async (req, res) => {
  try {
    const resultado = await pool.query("SELECT * FROM filmes ORDER BY id DESC");

    res.json(resultado.rows);
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao buscar filmes",
    });
  }
});

app.post("/filmes", async (req, res) => {
  try {
    const { titulo, genero, ano, nota, descricao } = req.body;

    const resultado = await pool.query(
      `INSERT INTO filmes (titulo, genero, ano, nota, descricao)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [titulo, genero, ano, nota, descricao],
    );

    res.status(201).json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao cadastrar filme",
    });
  }
});

app.put("/filmes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, genero, ano, nota, descricao } = req.body;

    const resultado = await pool.query(
      `UPDATE filmes
       SET titulo = $1,
           genero = $2,
           ano = $3,
           nota = $4,
           descricao = $5
       WHERE id = $6
       RETURNING *`,
      [titulo, genero, ano, nota, descricao, id],
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: "Filme não encontrado",
      });
    }

    res.json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao atualizar filme",
    });
  }
});

app.delete("/filmes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await pool.query(
      "DELETE FROM filmes WHERE id = $1 RETURNING *",
      [id],
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: "Filme não encontrado",
      });
    }

    res.json({
      mensagem: "Filme removido com sucesso",
      filme: resultado.rows[0],
    });
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao remover filme",
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
