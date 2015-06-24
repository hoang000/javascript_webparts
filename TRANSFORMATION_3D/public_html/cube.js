 var Speed = 30;    
  var increment = 1;  
 
 
 
 function animation()
       // 1. variables initilization 
 {     var angle =0;
         var elements =[];
   
        //var p = document.getElementById("cube");
        var childs = $("#cube").children();
     
        
     
     for (var i =0; i < childs.length; i++)
           elements.push(childs[i])
     
         var degreeOffset =[0,180,-90,90];       
         var caps = [-1,1];
        //2. event wiring
        var controls = document.getElementById("control");
              controls.children[0].onclick =  function(){ LeftclickHandler();};
              controls.children[1].onclick =  function(){ StopclickHandler();};
              controls.children[2].onclick =  function(){ RightclickHandler();};
     
     // 3. closure function which carries out the animation process   
     return function ()  
               {           
                     
                  
                     elements.forEach(function(el, i)  {  
                       //3.1 rotate the side faces
                        
                     var Index = Math.ceil((Math.cos(compassToRadian(Math.abs(degreeOffset[i]))).toFixed(2))*10);
                   
                 
                     
                    
                      if (i <= 3)
                      {
                             
                             $(el).css("transform",'rotateY(' + degreeOffset[i]+ 'deg) translateZ(100px)');
                             //el.setAttribute("style",'transform: rotateY(' + degreeOffset[i] + 'deg) translateZ(100px)') ;      
                              if (degreeOffset[i] < 0)
                                  $(el).zIndex(Index);
                              else
                                   $(el).zIndex(-Index);
                              
                             if (Math.abs(degreeOffset[i]) >90 && Math.abs(degreeOffset[i]) < 270)  
                                $(el).animate({opacity: 0.2},1);
                            else
                                $(el).animate({opacity: 1.0}, 1);
                   }
                      //3.1 rotate the top and bottom faces
                    else
                    {      $(el).css("transform",'rotateX(' + caps[i-4]* 90 + 'deg) translateZ(100px) rotateZ(' + -caps[i-4]*angle + 'deg)');
                       //el.setAttribute("style",'transform: rotateX(' + caps[i-4]* 90 + 'deg) translateZ(100px) rotateZ(' + -caps[i-4]*angle + 'deg)'); ;      
                    
                    }
                      degreeOffset[i] = (degreeOffset[i] + increment) % 360; 
                       
                   });
                    
                 
                    
                     angle+=increment; 
                };
   
   } //end of animation function
              
      //2.1 event handler definition for LEFT button 
     function LeftclickHandler()
     {                      
         if (increment == 0 || increment > 0) { increment =-1;}
     }
   
     //2.2 event handler definition for STOP button 
     function StopclickHandler()
     {                      
          increment = 0;
     
     }
     
     //2.3 event handler definition for RIGHT button 
     function RightclickHandler()
     {                      
           if (increment == 0 || increment < 0) { increment =1;}
         
     } 
       
 
 //** CUBE ROTATION INITIATOR **//      



window.onload = function()

{ 
     centerElements();
   
    //animation starts here
    interval = setInterval(animation()
     , Speed);
           
};


// centering the control panel and the cube relative to window
function centerElements()

{
    clientWidth = parseInt(document.documentElement.clientWidth);
      controlWidth = parseInt(document.getElementById("control").clientWidth);
      containerWidth = parseInt(document.getElementById("cube").clientWidth);
      buttonWidth = parseInt(document.getElementById("left").clientWidth);
      buttonMargin = parseInt((controlWidth-(3*buttonWidth))/4); 
    
    //Center the controller div
   document.getElementById("control").style.marginLeft = parseInt(clientWidth - controlWidth) /2 + "px";
     //Position button location
    for (var i = 0 ; i < document.getElementById("control").children.length; i++)
           document.getElementById("control").children[i].style.marginLeft = buttonMargin + "px";
       
       //Center the cube div
   document.getElementById("cube").style.marginLeft = (clientWidth - containerWidth)/2 + "px";
    
}

// convert degree to radians 
var compassToRadian =  function(compass)     
         {
             var radians = ((180 - compass - 90)) * (Math.PI / 180 % (2 * Math.PI));
           
           return  (radians < 0) ? radians + (2 * Math.PI) :  radians;
           
       
         }