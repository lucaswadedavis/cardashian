const cardashian = require('./index');

let html = `
  <html>
    <head>
      <title>Tige</title>
      <style type="text/css">
        table {
          width: 100%;
        }

        td {
          background-color: #f73;
        }
      </style>
    </head>
    <body>
      <h1>Taeftlaeish</h1>
      <table>
        <tr>
          <td>a</td><td>b</td>
        </tr>
      </table>
    </body>
  </html>
`;

cardashian(html, {width: 500, height: 100})
  .then(data => {
    // do something with the base64 encoded image
    console.log(data);
  }).catch(console.error);

