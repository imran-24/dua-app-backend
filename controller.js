const db = require('./database')


const readDuas = (callback) => {
    const sql = `SELECT  * FROM  dua`;
    db.all(sql, [], callback);
}

const readDuasByCategoryId = (id, callback) => {
  const sql = `SELECT * FROM dua WHERE cat_id=${id} ORDER BY dua_id ASC`;
  db.all(sql, [], callback);
};

const readCategorirs = (callback) => {
  const sql = `SELECT  * FROM  category`;
  db.all(sql, [], callback);
};

const readSubCategories = (callback) => {
  const sql = `SELECT  * FROM  sub_category`;
  db.all(sql, [], callback);
};

const readSubCategoriesById = (id, callback) => {
  const sql = `SELECT * FROM sub_category WHERE cat_id=${id}`;
  db.all(sql, [], callback);
};

module.exports = {
  readDuas,
  readCategorirs,
  readSubCategories,
  readSubCategoriesById,
  readDuasByCategoryId,
};