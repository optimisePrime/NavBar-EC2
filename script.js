import http from 'k6/http';
import { check } from "k6";
import { sleep } from "k6";
// { checkServerIdentity } from 'tls';

const phrases = ['incredible', 'tasty', 'rustic', 'intelligent', 'handcrafted', 'ergonomic', 'refined', 'awesome', 'gorgeous', 'concrete']
const randomPhrase = Math.floor(Math.random() * phrases.length);
const choice = phrases[randomPhrase];
const categories = ['electronics', 'clothes', 'accessories', 'appliances', 'furniture', 'games', 'books', 'handmade', 'officesupplies', 'software'];
const randomCategory = Math.floor(Math.random() * categories.length);
const category = categories[randomCategory];

export const options = {
  vud: 1,
  duration: '20s',

};

export default function () {
  console.log(choice)
  let res = http.get(`http://localhost:3003/products/electronics/${choice}`);
  check(res, {
    "is status 200": (r) => r.status === 200
  });
  // sleep(1);
}
