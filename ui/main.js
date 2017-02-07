console.log('Loaded!');
var img = document.getElementById('img');
var margin=0;
function move()
{
     margin=margin+10;
    img.style.margin= margin+'px';
    
  
    
    
}
img.onclick=function()
{
   //var interval = setInterval(move,10);
    img.style.marginLeft('100 px');
    
    
};