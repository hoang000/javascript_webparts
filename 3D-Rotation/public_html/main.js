/*********************************
 * The Carousel app starts from here.
 * 
 *
 */

var rotator;

window.onload  = function(){
     
      clientWidth = parseInt(document.documentElement.clientWidth);
      controlWidth = parseInt(document.getElementById("control").clientWidth);
      containerWidth = parseInt(document.getElementById("container").clientWidth);
      buttonWidth = parseInt(document.getElementById("left").clientWidth);
      buttonMargin = parseInt((controlWidth-(3*buttonWidth))/4); 
    
    //Center the controller div
   document.getElementById("control").style.marginLeft = parseInt(clientWidth - controlWidth) /2 + "px";
     //Position button location
    for (var i = 0 ; i < document.getElementById("control").children.length; i++)
           document.getElementById("control").children[i].style.marginLeft = buttonMargin + "px";

    //Center the container div
   document.getElementById("container").style.marginLeft = (clientWidth - containerWidth)/2 + "px";
        
   
    // Application gets started
      rotator = new Carousel ("container","control");

}
