const express =require ("express")
var fs = require('fs');

const { scripeEbay } = require('./try')
const router = express.Router();

router.post('/root',async function (req, res) {
  
  const search = 'https://www.ebay.com/sch/' + req.body.name
  const description = await scripeEbay(search)
  console.log(description)
  var json = JSON.stringify(description);
  fs.writeFile('myjsonfile.json', json, 'utf8',function (err) {
    if (err) return console.log(err);});
  res.send(description)
})
  

module.exports=
  router

