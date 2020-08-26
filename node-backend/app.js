const express = require('express')
const app = express()
const port = 5000


// testing rest api 
app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});
 
app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});
 
app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});
 
app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});
app.set('port', port);

// testing rest api with dynamic routing
app.get('/:id', (req, res) => {
  return res.send('Received a GET HTTP method ' + req.params.id);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
