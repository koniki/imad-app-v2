console.log('Loaded!');
var img=document.getElementById('img');
function move()
{
        var movie= img.style.marginLeft;
        movie= movie+ 10+'px';
        
        
        
}


             img.onclick=function(){ 
                    
                    //img.style.marginLeft='100px';   
                var    interval= setInterval(move,10);
                    
                    };