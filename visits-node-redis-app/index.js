const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();

//  host: 'redis-server'
// Redis is going to make a good faith and use that to find a container with name redis-server
// If this app is being used stand alone, the host is going to be like http://localhost:xxx/

// redis default port: 6379

const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});

client.set('visits', 0);

app.get('/', (req, res) => {
  // setTimeout(() => process.exit(0), 2000);
  client.get('visits', (err, visits) => {
    res.send(`Number of visits is ${visits}`);
    client.set(`visits`, parseInt(visits) + 1);
  });
});

app.listen(8081, () => console.log('Listening to port 8081'));
