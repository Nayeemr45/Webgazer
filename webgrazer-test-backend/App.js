const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
var fs = require('fs');

app.listen('5000', () => {
  console.log('Sever started');
});
app.use(cors());
app.use(express.json());

app.get('/', (req , res) => {
  res.send('hello');
});
app.post('/data', (req , res) => {
    if(req.body){
        res.send("Data Sent Successfully")
    }
    console.log('data:');
    console.log(req.body.finalUserDataJSON);
   /*  jsn = req.body;
    var data='';
for (var i = 0; i < jsn.length; i++) {
    data=data+jsn[i].name+'\t'+jsn[i].school+'\t'+jsn[i].marks+'\n';
 }
fs.appendFile('Filename.xls', data, (err) => {
    if (err) throw err;
    console.log('File created');
 }); */
});
