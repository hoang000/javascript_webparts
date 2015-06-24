
$(document).ready(function() 

     //center background div
{  // $("#background").css("left",(parseInt($(window).width()) - 500)/2 + "px");
    
    
    
    var showSides= ["show-front","show-back","show-right","show-left","show-top","show-bottom"];
   
    var i =0;
    var str ="";
    function rotateCube(){
       setImage();
       if (i===6) i=0;
     $("#cube").attr("class",showSides[i]); 
     
    
     
        
       i++;
     
     timer = setTimeout(rotateCube,5000);
    }
    
  rotateCube();
        
  function setImage()
  {  
     var j,num, image;
     
      for (j=0; j<=5; j++)
      {   image = new Image();
          num = Math.floor((Math.random() * 36) + 1);
          image.src = "book" + num + ".jpg";
         $("#cube img").eq(j).attr("src", image.src).fadeIn(2000).fadeOut(4000);
         $("#cube img").eq(j).mousedown(display(image.src));
           
      }
      
    
  }
    function display (src)
    {   $("#show").attr({'width': '500px','height': '500px'});
        $("#show").attr("src",src).fadeIn(1000).fadeOut(6000);
        
    }
    
    
    
});;