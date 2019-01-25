const redis = require('redis');

const client = redis.createClient(redis://3.16.14.107:3003);

client.on('connect', () => {
  console.log('Redis client connected');
});

client.on('error', (err) => {
  console.log(err);
});

