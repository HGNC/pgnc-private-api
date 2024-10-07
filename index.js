const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 5000;

const pool = new Pool({
    user: 'dbadmin',
    host: 'pgncdb',
    database: 'postgres',
    password: 'pgnc',
    port: 5432,
});

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/genes', async (req, res) => {
    try {
      const query = 'SELECT * FROM genes;';
      const { rows } = await pool.query(query);
      res.status(200).json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('failed');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
