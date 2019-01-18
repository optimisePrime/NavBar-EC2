const faker = require('faker');
const elasticsearch = require('elasticsearch');

// const { post } = require('./server.js');

const categories = ['electronics', 'clothes', 'accessories', 'appliances', 'furniture', 'games', 'books', 'handmade', 'officesupplies', 'software'];
const client = new elasticsearch.Client({
  host: 'localhost:9200',
  // log: 'trace',
});

async function seedDB(i, j, name, category) {
  await client.index({
    index: 'search_bar_data',
    type: 'data',
    body: {
      category: `${category}`,
      id: `${(j * 100) + i}`,
      name: `${name}`,
    },
  });
}
for (let j = 0; j < 10; j++) {
  for (let k = 0; k < 100; k++) {
    for (let i =0; i < 100; i++) {
      const productName = faker.commerce.productName() + ((j * 1000) + i);
      seedDB(i, j, productName, categories[j]);
    }
  }
  console.log(`${(j + 1) * 10}% complete`);
}


// for (let j = 0; j < 10; j++) {
//   for (let k = 0; k < 1000; k++) {
//     let arr = [];
//     for (let i =0; i < 1000; i++) {
//       let obj = {};
//       const productName = faker.commerce.productName() + ((j * 1000) + i);
//       obj.name = productName;
//       obj.id = (j * 1000000) + (k * 1000) + j;
//       obj.category = categories[i];
//       arr.push(obj);
//     }

//   }
//   console.log(`${(j + 1) * 10}% complete`);
// }




// client.ping({
//   // ping usually has a 3000ms timeout
//   requestTimeout: 1000
// }, (error) => {
//   if (error) {
//     console.trace('elasticsearch cluster is down!');
//   } else {
//     console.log('All is well');
//   }
// });

