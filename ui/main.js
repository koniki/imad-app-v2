console.log('Loaded!');
var img = document.getElementById('img');
var margin=0;
funtion move()
{
     margin=margin+10;
    img.style.margin= margin+'px';
    
  
    
    
}
img.onclick=funtion()
{
   var interval = setInterval(move,10);
    
}