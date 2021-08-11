
const express = require ('express')
const setRequestsAccessHeader= require('./corsMiddleware')
const app = express();

const router = require('./route');

app.use(express.json())
app.use( setRequestsAccessHeader.setRequestsAccessHeader );
app.use(router)

app.listen(process.env.PORT || 4000, () => {
  console.log("now listenning to a req on port 4000");
});
