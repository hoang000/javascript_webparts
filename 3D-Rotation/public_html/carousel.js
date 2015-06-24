
//******CAROUSEL OBJECT**********
var Carousel = function (id, control)
{
var that = this;
this.div = document.getElementById(id);
this.divChildNodes = this.div.getElementsByTagName("div");
this.controler = document.getElementById(control);
this.angle =0;
this.direction = 1;
this.defaultSpeed = 2;
this.speed = this.defaultSpeed;

 
 
  
  //Attach event handlers for control buttons
  this.controler.children[0].onclick =  function(){ that.LeftclickHandler(that)};
  this.controler.children[1].onclick =  function(){ that.StopclickHandler(that)};
 this.controler.children[2].onclick =  function(){ that.RightclickHandler(that)};

// anination starts here:
setInterval( function() { that.onTimer(); }, 70 );

}

 Carousel.prototype.onTimer = function()
 {
     var angleOffset, Index, angle;
     
  
       angle =  (this.angle +=this.speed) %360;
       
     
     for ( var i =0; i < this.divChildNodes.length; i++ )
     {
         angleOffset = 360* (i/this.divChildNodes.length);
         
         angleOffset = (angleOffset + angle) % 360;
             

        Index = Math.ceil((Math.cos(compassToRadian (Math.abs(angleOffset)).toFixed(2))*10));
        
         
         
         this.divChildNodes[i].setAttribute("style",'transform: rotateY(' + (-(angleOffset)) + 'deg)');
         
         if (angleOffset < 0)
             this.divChildNodes[i].style.zIndex= -Index;
         else
             this.divChildNodes[i].style.zIndex=  Index;
     }
      
 }
 
 Carousel.prototype.LeftclickHandler = function (that) {

if (that.speed ==0) that.speed = that.defaultSpeed;
 if (that.speed < 0) {that.speed = -(that.speed);}

 }
 
  Carousel.prototype.RightclickHandler = function (that) {
    if (that.speed ==0) that.speed =that.defaultSpeed;
     if (that.speed > 0) {that.speed = -(that.speed); }
}
 
  Carousel.prototype.StopclickHandler = function (that) {
   that.speed =0;

 }
 
 
 // spinnerElement OBJECT
 var spinnerElement = function ()
 
{
    // to be constructed 
    spinnerElement.prototype.UpdateElementLocation = function (){  };
    
}

// convert degree to radians 
var compassToRadian =  function(compass)     
         {
             var radians = ((180 - compass - 90)) * (Math.PI / 180 % (2 * Math.PI));
           
           return  (radians < 0) ? radians + (2 * Math.PI) :  radians;
           
       
         }