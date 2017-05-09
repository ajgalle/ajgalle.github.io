$(document).ready(function(){ //Makes it so won't run until page is done loading.


var quoteContainer = document.getElementById("output");  //target the output div

var btn = document.getElementById("btn");  

btn.addEventListener("click",function(){
  var ourRequest = new XMLHttpRequest();
  
  ourRequest.open('GET','https://api.chucknorris.io/jokes/random');
  
ourRequest.onload = function(){
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};


ourRequest.send();
  
});

function renderHTML(data){
  var htmlString = "";
 // data.value=data.value.replace(/[.,\/#!$%\^&\*;:{}=\-_"`~()]/g,"").toUpperCase();
   var cat="cati";
  var twitter='<a href="http://twitter.com/intent/tweet?text='+data.value+'"> Tweet This </a>';


  htmlString = ' <p>' + data.value + ' '+ twitter + '</p>';
  
  quoteContainer.insertAdjacentHTML('afterbegin',htmlString);
  
}
});