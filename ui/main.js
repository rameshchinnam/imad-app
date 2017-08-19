console.log("Client-Side Java Script Begin");
var counterBtn = document.getElementById("counter");
var submitBtn = document.getElementById("submit");
var counter = 0;
counterBtn.onclick = function(){
counter = counter + 1;
document.getElementById("counterText").innerHTML = counter.toString();
};
var names = '';
submitBtn.onclick = function(){
/*names = '<li>'+document.getElementById("inputName").value+'</li>';
document.getElementById("nameList").innerHTML=document.getElementById("nameList").innerHTML+names;*/
var request = new XMLHttpRequest();
request.onreadystatechange = function(){
  if (request.readyState === XMLHttpRequest.DONE)
  {
   if (request.status === 200)
   {
    var names = request.responseText;
    names = JSON.parse(names);
    var nameList = '';
    for(i=0; i<names.length; i=i+1)
    {
     nameList=nameList+'<li>'+names[i]+'</li>';
    }
    document.getElementById("nameList").innerHTML=nameList;
   }
  }
};
request.open('GET', 'http://localhost:8080/submit-name/?name=' + document.getElementById("inputName").value, true);
request.send(null);
};
console.log("Client-Side Java Script End");

