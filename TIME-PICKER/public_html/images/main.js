 /*************************************************
      TIME PICKER or WHEEL ANIMATION
 **************************************************/

window.onload = function()
{ 
    $(document).disableSelection();

    
    centerElement(document.getElementById("wrapper"));
    
   var day = new WheelElement("minute");
   
         
   var month = new WheelElement("hour");
    
    
    new WheelAnimation(day, month);  
}

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
