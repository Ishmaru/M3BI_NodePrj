# M3BI

#### To use locally simply run:
`npm install` then add MongoDb user credentials:

`touch dev_db_url.js` and insert following code:

```javascript
let devDbUrl = 'mongodb://<username>:<password>@ds257485.mlab.com:57485/m3bi_nodeprj';

module.exports = devDbUrl;
```
`npm app.js`

make requests to these routes:

GET - localhost:9000/users/

GET - localhost:9000/users/:id

POST - localhost:9000/users/create

PUT - localhost:9000/users/:id/update

DELETE - localhost:9000/users/:id/delete
