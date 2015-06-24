//Some reusable variables throughout the animation (global scope)
var flipSpeed = 500, removeSpeed = 450;
var timer1,timer2,timer3;
var cloneONE, cloneTWO;

//Flip Object
Flip = function(id)
{   
    this.containers = id;
    that = this;
 
    //1. start animation
    setInterval(function(){that.run();}, flipSpeed);
   
 
  Flip.prototype.run = function() 
  {
     
      var time = getTime();
       
/* Below is a simple example of high order function 
    using callback function to determine what element to display current time */
      
      this.containers.forEach(function(el, i)
      
      {
          if (parseInt(el.value) !== parseInt(time[i]))
          { 
              el.display(parseInt(time[i]));   
          }   
      }   
  );
      
}  
}// End of Flip object

 


// TimeElement object
TimeElement = function(id)
{  
   this.element = id; 
   this.value = -1;
   
   
   TimeElement.prototype.display = function(val)
   {      var that  = this;
           //update the current time value for the dom element that displays current time
                this.value = parseInt(val); 
          
        //steps to copy DOM elements before DOM manipulation
       clearTimeout(timer1,timer2,timer3);
       
       
       cloneONE = $(this.element).children('div').eq(0).clone();   
             cloneTWO = $(this.element).children('div').eq(0).clone(); 
     
              $(cloneONE).prependTo($(this.element));
              $(cloneTWO).prependTo($(this.element));
          
   // The following steps manipulate DOM elements to produce effect as seen on the browser   
     
      $(this.element).children('div').eq(1).css("background-image",'url(numbers/' + val + '-bottom-half.png)');
      $(this.element).children('div').eq(0).css("background-image",'url(numbers/' + val + '-top-half.png)');  
       
        $(this.element).children('div').eq(2).css("transform",'rotateX(-180deg)');
    
        timer2 = setTimeout(function(){that.remove(3);}, removeSpeed); 
           
           $(this.element).children('div').eq(1).css("transform",'rotateX(-180deg)'); 
           
     timer3 = setTimeout(function(){that.remove(2);}, removeSpeed);   
   };
   
    TimeElement.prototype.remove = function(key) 
    {
        $(this.element).children('div').eq(key).remove();
    };
} // End of TimeElement object



 
 $(document).ready(function()

{  
     $(document).disableSelection();
     
     
     centerElement(document.getElementById("box"));
     
   var collection = [];
   for (var i = 0; i < $('.container').length; i++)
   {
          collection.push(new TimeElement($('.container').eq(i)));
       
   }  

  // Flip application initiates
         new Flip(collection);

});
  

/*  These are helper functions  */
 function centerElement(el)
 
{
    var windowSize = getWindowSize();
    var x = Math.round(windowSize.w/2 -el.clientWidth/2);
    var y = Math.round(windowSize.h/2 -el.clientHeight/2);
    
    el.style.left = x + "px";
    //el.style.top = x + "px";
}
 
 function getWindowSize()
 {
    var width = window.innerWidth ||  //DOM
                         document.documentElement.clientWidth || //IE
                         document.body.clientWidth || 0;
                         
    var height = window.innerHeight ||  //DOM
                         document.documentElement.clientHeight || //IE
                         document.body.clientHeight || 0;                  
          return {  w: width, h: height };       
                 
 }
 
function getTime()
 {  
     var now  = new Date();
    
     var hour = (now.getHours().toString()).length < 2? '0' + (now.getHours()).toString() :   (now.getHours()).toString();
     var min = (now.getMinutes().toString()).length < 2? '0' + (now.getMinutes()).toString() :   (now.getMinutes()).toString();
    var sec = (now.getSeconds().toString()).length < 2? '0' + (now.getSeconds()).toString() :   (now.getSeconds()).toString();
   
    var strTime = hour + min + sec;
   
     return (strTime.split("")).reverse();
     
  
 }