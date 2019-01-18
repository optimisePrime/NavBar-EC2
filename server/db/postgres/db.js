//const Pool = require('pg').Pool;
const { Client } = require('pg');

const client = new Client({
  user: 'liamwilliams',
  host: 'localhost',
  database: 'search_bar_data',
  port: '5432',
});

client.connect((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Connected!')
  }
})

const getProducts = (query) => {
  // const query = `SELECT * FROM search_bar_data where name=${}`;
  console.log(query);
  client.query(`Select * from clothes where name like '%' || '${query}' || '%' limit 10`)
    .then((result) => {
      console.log(result);
      return result;
    });
};

const getCategories = (req, res) => {
  // const query = `SELECT category FROM search_bar_data where name=${}`
  const categories = ['electronics', 'clothes', 'accessories', 'appliances', 'furniture', 'games', 'books', 'handmade', 'officesupplies', 'software'];
  return categories;

}

module.exports = {
  getProducts,
  getCategories,
};
