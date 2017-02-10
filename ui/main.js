//counter code
var click= document.getElementById('nik');

var counter=0;
click.onclick=function()
{
      counter=counter+1;
 document.getElementById('span').textContent=counter;
 
// or apply this code
// span.innerHTML=counter.toString();
    
};