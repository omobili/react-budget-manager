require('./styles/app.css');

var content = require('./js/content');

var app = document.getElementById('app');
var elem = document.createElement('h1');
elem.innerHTML = content;

app.appendChild(elem);