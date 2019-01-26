//const Pool = require('pg').Pool;
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: '52.14.198.30',
  password: '',
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
  //console.log(query);
  let num = Math.floor(Math.random() * 5000000);
  client.query(`Select * from electronics where name like '%' || '${query}' || '%' and id > ${num} limit 5`);
};

const getCategories = () => {
  // const query = `SELECT category FROM search_bar_data where name=${}`
  const categories = ['electronics', 'clothes', 'accessories', 'appliances', 'furniture', 'games', 'books', 'handmade', 'officesupplies', 'software'];
  return categories;

}

module.exports = {
  getProducts,
  getCategories,
};
