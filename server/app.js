require('newrelic');
const db = require('./db/db');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getProducts, getCategories } = require('.././server/db/postgres/db.js')
const redis = require('redis');

const app = express();

// REDIS
/* const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis client connected');
});

client.on('error', (err) => {
  console.log(err);
});
*/

// const categoriesRouter = require('./routes/category.routes');
// const productsRouter = require('./routes/product.routes');

// STATIC FILES
app.use(express.static(path.join(__dirname, '..', 'public')));

// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded());
app.use(cors());

// ROUTES
// app.use('/categories', categoriesRouter);
// app.use('/products', productsRouter);

app.get('/categories', (req, res) => {
  res.send(getCategories());
});


app.get('/products/:category/:query', (req, res) => {
  const { query } = req.params;
  client.get(query, (err, reply) => {
    if (err) return err;
    if (reply === null) {
      const result = getProducts(query);
      client.set([query, result]);
      res.send(result);
    } else {
      res.send(reply);
    }
  });
});

//   if (err) {
//     return err;
//   } else if(reply === null) {
//     const result = getProducts(query);
//     client.set(query, result);
//     res.send(result);
//   }
// });
// );

// 404
app.use((req, res) => {
  res.status(404).send('Not found');
});



module.exports = app;
