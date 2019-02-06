# Cardashian

Cardashian is made for turning strings of HTML into base64 encoded images.

The API is pretty simple,

```
cardashian(html, {width: 500, height: 100})
  .then(imageData => {
    // do something with the base64 encoded image
  }).catch(console.error);
```

Take a look at the ```example.js``` file if you feel like the code above isn't
sufficiently descriptive.

Cardashian uses the awesome
[Puppeteer](https://www.npmjs.com/package/puppeteer) project to do the HTML
rendering and - to be completely transparent here - if you need something more
than "here's some HTML can you turn it into an image please" I'd suggest
avoiding this thing entirely and going straight to that much more powerful and
interesting tool.

### License: MIT
