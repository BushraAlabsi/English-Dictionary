const express = require('express');

// app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
// const userApiRouter = require('./usersApiRouter.js');

const path =require('path');

const Dictionary = require("oxford-dictionary-api");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/api/users', userApiRouter);

app.use(express.static(path.join(__dirname)))


app.get('/', function (req, res) {
res.render("index");	
});



app.get('/definition/:word', function(req,res){
    const word = req.params.word;

var app_id = "31c5e966"; var app_key = "2ee864a5de0debdf20c1fa162cbcc663";

var dict = new Dictionary(app_id,app_key);

dict.find(word,function(error,data){ if(error) return console.log(error);


 const def = data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
 console.log(def);
 res.send(def);

  });
})

// app.get('/*', function (req, res) {
// res.render("index");	
// });

const port = process.env.PORT || 3000;

const server = app
.listen(port, () => console.log(`Listening on ${ port }`));