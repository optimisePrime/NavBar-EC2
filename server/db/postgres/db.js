const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'liamwilliams',
  host: 'localhost',
  database: 'search_bar_data',
  port: '5432',
});

pool.connect((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Connected!')
  }
})

const getProducts = (req, res) => {
  // const query = `SELECT * FROM search_bar_data where name=${}`;
  console.log('REQ BODY', req.body)


}

const getCategories = (req, res) => {
  // const query = `SELECT category FROM search_bar_data where name=${}`
  const categories = ['electronics', 'clothes', 'accessories', 'appliances', 'furniture', 'games', 'books', 'handmade', 'officesupplies', 'software'];
  return categories;

}

module.exports = {
  getProducts,
  getCategories,
};
