const pool = require('../config/db');

const AdocaoRepository = {};

AdocaoRepository.findAllAvailable = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM cats WHERE adoption_status = ?',
    ['available']
  );
  return rows;
};

AdocaoRepository.findCatById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM cats WHERE id = ?', [id]);
  return rows[0] || null;
};

AdocaoRepository.findAdocaoByUserAndCat = async (user_id, cat_id) => {
  const [rows] = await pool.query(
    'SELECT * FROM adoptions WHERE user_id = ? AND cat_id = ? AND status IN (?, ?)',
    [user_id, cat_id, 'pending', 'approved']
  );
  return rows[0] || null;
};

AdocaoRepository.createAdocao = async (user_id, cat_id) => {
  const [result] = await pool.query(
    'INSERT INTO adoptions (user_id, cat_id) VALUES (?, ?)',
    [user_id, cat_id]
  );

  await pool.query(
    'UPDATE cats SET adoption_status = ? WHERE id = ?',
    ['pending', cat_id]
  );

  return result.insertId;
};

AdocaoRepository.findAdocoesByUser = async (user_id) => {
  const [rows] = await pool.query(
    `SELECT a.id, a.status, a.created_at,
            c.id AS cat_id, c.name, c.age, c.sex, c.image_url
     FROM adoptions a
     JOIN cats c ON a.cat_id = c.id
     WHERE a.user_id = ?
     ORDER BY a.created_at DESC`,
    [user_id]
  );
  return rows;
};

module.exports = AdocaoRepository;