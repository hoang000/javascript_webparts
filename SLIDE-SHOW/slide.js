var photos = [ 
    {"image" : "raptor-1.jpg"}, 
    {"image" : "raptor-2.jpg"},
    {"image" : "raptor-3.jpg"},
    {"image" : "raptor-4.jpg"},
    {"image" : "raptor-5.jpg"},
    {"image" : "raptor-6.jpg"},
    {"image" : "raptor-7.jpg"},
    {"image" : "raptor-8.jpg"},
    {"image" : "raptor-9.jpg"},
    {"image" : "raptor-10.jpg"},
    {"image" : "raptor-11.jpg"}
   ];
 
var slideshowSpeed = 6000; 
var activeContainer = 1;  
var currentImg = 0;
var animating = false;

var navigate = function() 

{

currentImg++;
 if(currentImg === photos.length + 1) 
 {        
     currentImg = 1;
 }

 var currentContainer = activeContainer;
   if(activeContainer === 1) {
      activeContainer = 2;
   } else {
      activeContainer = 1;
   }
  
   showImage(photos[currentImg - 1], currentContainer, activeContainer);


};

var showImage = function(photoObject, currentContainer, activeContainer) 


{
 
    $("#headerimg" + currentContainer).fadeOut(6000); 
    
    $("#headerimg" + activeContainer).css({"background-image":"url(image/" + photoObject.image + ")" ,"display":"block"} ).hide().fadeIn(6000); 
     
    

 
};




$(document).ready(function() 
{ 
    $("#headerimgs div:first-child").css({"background-image":"url(image/default.jpg)","display":"block"});
    
  interval = setInterval(function() {
     navigate();
     
   }, slideshowSpeed);
                                                                       
                          
}
);