import http from 'k6/http';


export const options = {
  vus: 100,
  duration: '120s',
};

export default function () {
  const phrases = ['incredible', 'tasty', 'rustic', 'intelligent', 'handcrafted', 'ergonomic', 'refined', 'awesome', 'gorgeous', 'concrete']
  const randomPhrase = Math.floor(Math.random() * phrases.length);
  const choice = phrases[randomPhrase];
  const categories = ['electronics', 'clothes', 'accessories', 'appliances', 'furniture', 'games', 'books', 'handmade', 'officesupplies', 'software'];
  const randomCategory = Math.floor(Math.random() * categories.length);
  const category = categories[randomCategory];

  http.get(`http://localhost:3003/products/electronics/${choice}`);
  // sleep(1);
}
