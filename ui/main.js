//counter code
var click= document.getElementById('nik');

var counter=0;
click.onclick=function()
{
// create  request to webpage
// what to do after the request
var request =new XMLHttpRequest();
request.onreadystatechange=function()
{
  if(request.readyState===XMLHttpResponse.DONE)
  {
      if(request.status===200)
      {
          var counter= request.responsetext;
           
 document.getElementById('span').textContent=counter;
 
// or apply this code
// span.innerHTML=counter.toString();
          
      }
      
      
  }
    
};
// make the request
request.open('GET','http://koniki.imad.hasura-app.io/counter','true');

request.send(NULL);

    
    
    
    
     


    
};