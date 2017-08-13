var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one': {
title: 'Article One | RC',
heading: 'Article One',
date: '13th August 2017',
content: `
 <div> <p> This is the content for Article one. </p>
       <p> Additional Text </p>
 </div>
`
},
'article-two': {
title: 'Article Two | RC',
heading: 'Article Two',
date: '14th August 2017',
content: `
 <div> <p> This is the content for Article Two. </p>
       <p> Additional Text </p>
 </div>
`
},
'article-three': {
title: 'Article Three | RC',
heading: 'Article Three',
date: '15th August 2017',
content: `
 <div> <p> This is the content for Article three. </p>
       <p> Additional Text </p>
 </div>
`
}
}

function createTemplate(data){
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;
var htmlTemplate = `
<html>
<head>
<title> ${title}</title>
<meta name="viewport" content="width=device-width", initial-scale=1/>
</head>

<body>
 <div>
  <a href="/">Home<a>
 </div>
 <hr/>
 <h3> ${heading} </h3>
 <div> ${date} </div>
 <div> ${content} </div>
</body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
articleName = req.params.articleName; 
res.send(createTemplate(articles[articleName]));
});

app.get('/article-one', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-one.html')); 
});

app.get('/article-two', function (req, res) {
  res.send('article-two is requested');
});

app.get('/article-three', function (req, res) {
  res.send('article-three is requested');
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
