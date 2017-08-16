console.log('Loaded!');
//alert('This is from Clientside Java Script.');
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
marginLeft = marginLeft + 1;
img.style.marginLeft = marginLeft + 'px';
};

img.onclick = function() {
var interval = setInterval(moveRight, 50);
};

var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
 //var counterText = document.getElementById('counterText');
 //counter = counter + 1;
 //counterText.innerHTML = counter.toString();
 var req = new XMLHttpRequest();
 req.onreadystatechange = function(){
  if (req.readyState === XMLHttpRequest.DONE){
   if (req.status === 200){
    counter = req.responseText;
    var counterText = document.getElementById('counterText');
    counterText.innerHTML = counter.toString();
   }
  }
 };
 req.open('GET', 'http://localhost:8080/counter', true);
 req.send(null);
};

var inputName = document.getElementById('inputName');
//var name = inputName.value;
var submit = document.getElementById('submit');
submit.onclick = function(){
 var name = inputName.value;
 var req = new XMLHttpRequest();
 req.onreadystatechange = function(){
  if (req.readyState === XMLHttpRequest.DONE){
   if (req.status === 200){
    var names = req.responseText;
    var names = JSON.parse(names);
    var nameList = document.getElementById('nameList');
    var list = '';
    for (var i = 0; i<names.length; i++){
     list += '<li>' + names[i] + '</li>';
    }
    nameList.innerHTML = list;
   }
  }
 };
 //req.open('GET', 'http://localhost:8080/submit-name/'+name, true);
req.open('GET', 'http://localhost:8080/submit-name/?name='+name, true); 
req.send(null);
};
