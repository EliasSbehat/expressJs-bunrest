### bunrest

[![NPM Version][npm-version-image]][npm-url]

### bunrest is a express like api for [bun](https://github.com/oven-sh/bun) http server (limited method supported)

## Get started

To create a bun project, see reference [here](https://github.com/oven-sh/bun#bun-create)

### Server set up

```js
const App = require('bunrest');
const server = new App.BunServer();
```

After that, you can call http method just like on `express`

```js
server.get('/test', (req, res) => {
  res.status(200).json({ message: 'succeed' });
});

server.put('/test', (req, res) => {
  res.status(200).json({ message: 'succeed' });
});

server.post('/test', (req, res) => {
  res.status(200).json({ message: 'succeed' });
});
```

### Router

```js
// add router
const router = server.Router();

router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Router succeed' });
})

router.post('/test', (req, res) => {
  res.status(200).json({ message: 'Router succeed' });
})

router.put('/test', (req, res) => {
  res.status(200).json({ message: 'Router succeed' });
})

server.use('/your_route_path', router);
```

### Start the server, listen to port

```js
server.listen(3000, () => {
  console.log('App is listening on port 3000');
});
```

[npm-url]: https://www.npmjs.com/package/bunrest
[npm-version-image]: https://badgen.net/npm/v/bunrest
