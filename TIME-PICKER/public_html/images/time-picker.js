
 var tracking = true;    // flag is used to control the mouse tracking during wheel movement
 var speed = 30;          // how fast the wheel turns. The greater value, the slower.
 var translateX = 15;   // traveling distance the wheel turns to change faces.
 
/*********************************************************************
                           definition of WheelAnimation Object
**********************************************************************/
function WheelAnimation(m, h)
{                         // m: minute wheel; h: hour wheel
    var that = this;
    this.elements = [m,h];
    
   
   
   // wiring event handlers- featured with mouse event debouncing as presented in Javascript Eloquent book
    this.elements[0].wheel.addEventListener("mouseover",function(evt){ that.trackMouse(evt, that.elements[0]);});
    this.elements[0].wheel.addEventListener("mousemove", function(evt){ setTimeout(function(){that.trackMouse(evt, that.elements[0]);},300);});

     this.elements[1].wheel.addEventListener("mouseover",function(evt){ that.trackMouse(evt, that.elements[1]);});
     this.elements[1].wheel.addEventListener("mousemove", function(evt){ setTimeout(function(){that.trackMouse(evt, that.elements[1]);},300);});
     
     this.elements[0].wheel.addEventListener("mousedown",function(evt){ that.trackMouse(evt, that.elements[0]);});
      this.elements[1].wheel.addEventListener("mousedown",function(evt){ that.trackMouse(evt, that.elements[1]);});
     
     //display result after time units are selected
     setInterval(function(){that.displayResult();}, 500);


WheelAnimation.prototype.trackMouse = function(evt, obj)
{ 
  
    
    if (tracking)
    {  
        if (evt.type === "mouseover")
        {   
            obj.y = evt.clientY;
            
        }
     
         
         if (evt.type ==="mousemove")
         { 
              var d = evt.clientY - obj.y;  
                    
         }
    }
    
    if (Math.abs(d) >=20)
    {   tracking =false;
      
        d > 0 ? obj.sign = 1: obj.sign =-1;
        obj.addedFaces = Math.floor(Math.abs(d) /20);
         obj.addFaces();        
  }
  
};
  
WheelAnimation.prototype.displayResult = function()
{
    var  mod ="";
    var day = $(this.elements[0].wheel).children().eq(2).attr("id");
        day =  day.toString().length === 1 ? '0' + day : day;
    var month = $(this.elements[1].wheel).children().eq(2).attr("id");
    mod =  month.toString().length === 1 ? " AM" : " PM";  
    month =  month.toString().length === 1 ? '0' + month : month;
 
    var result =  month  + ":" + day + mod;
    document.getElementById("display").innerHTML = result;

};

}

/****************************************************************
                             definition of WheelElement Object
*****************************************************************/
function WheelElement(id)
{
    this.wheel =document.getElementById(id);
    this.sign = 0; //sign indicates direction of upward or downward movement: -1 => MoveDown, +1 => MoveUp
    this.y  =0; // y coordinate of the mouse position on the wheel
    this.addedFaces=0;  // number of faces turned in a single mouse move. It depends on how much of distance the mouse travels
  
}  

WheelElement.prototype.addFaces  = function()
{
    //2. clear border drawn on middle "face"
         $(this.wheel).children().eq(2).css("border","none");
         $(this.wheel).children().eq(2).css("color","#ffffff");
          
         
   // 3. copy the id of either first face or last face based on mouse cursor moving up or moving down

for (var i =0; i <this.addedFaces; i++)
   {
        var value = this.sign < 0 ? $(this.wheel).children().first().attr("id"): $(this.wheel).children().last().attr("id");
           
   // 4. get the new value  for the new face to be created, which either comes before the first face or comes after the last face
          
          if ($(this.wheel).attr("id") ==="minute")   
             value = (parseInt(value) +1*this.sign)  < 0 ? ((parseInt(value) + 1*this.sign) + 60) % 60 : (parseInt(value) + 1*this.sign) % 60 ;
         
          else
               value = (parseInt(value) +1*this.sign)  < 0 ? ((parseInt(value) + 1*this.sign) + 24) % 24 : (parseInt(value) + 1*this.sign) % 24 ;
                 
        
   this.sign < 0 ? $(this.wheel).children().first().before($(this.wheel).children().last().clone()): $(this.wheel).children().last().after($(this.wheel).children().last().clone());
      
      
     this.sign < 0 ? $(this.wheel).children().first().attr("id", value) : $(this.wheel).children().last().attr("id", value);
        
        
     this.sign < 0 ? $(this.wheel).children().first().html(value) : $(this.wheel).children().last().html(value);
     
}  
  this.turnFaces();   // start turning the wheel
}

WheelElement.prototype.turnFaces  = function()
{   
    var that = this;
     var x =0; 
    var origin =[], angle =[], margin =[];
    
    for (var i =0; i < this.addedFaces; i++)
    {
         origin[i] = "top";
         angle[i] = 50;
         margin[i] = 0;
    }
    
    this.sign < 0 ? origin.unshift('bottom','bottom','center','top','top') : origin.push('bottom','bottom','center','top','top');
    this.sign < 0 ? angle.unshift(50,50,0,-50,-50) : angle.push(50,50,0,-50,-50);
    this.sign < 0 ? margin.unshift( 2,0,4,6,0) : margin.push( 2,0,4,6,0);
   
    var onTimer = setInterval(function(){
   
           
        if ( x <= translateX)
                      {       
                           $(that.wheel).children().each(function(i){
                                             
                                $(this).css("transform-origin",origin[i]);
                             
                               $(this).css("transform","translateY(" + x*(-(that.sign)) + "px)" + "rotateX(" + angle[i] + "deg)");
                               $(this).css("margin-top", margin[i]); 
                                  
                                } );
                                ++x;
                        } 
                    
                  else {clearInterval(onTimer);  that.updateFaces(); }
               }, speed);  
};


WheelElement.prototype.updateFaces = function()
{
     var that = this;
   
    for (var i =0; i <this.addedFaces; i++) 
        {    
            this.sign < 0 ? $(this.wheel).children().last().remove() : $(this.wheel).children().first().remove();  
        }
       
             $(this.wheel).children().each(function()
             {
                 
           //reset translation on all faces on Y axis
             $(this).css("transform","translateY(0px)");
                
              });
           
    //transform faces
    var  transformedOrigin = ["bottom", "bottom","center", "top","top"], transformedAngle =[50,50,0,-50,-50]; 
       
         $(that.wheel).children().each(function (i)
         {
             $(this).css("transform-origin", transformedOrigin[i]);
             $(this).css("transform", 'rotateX(' + transformedAngle[i] + 'deg)');
         });
      
    
             $(that.wheel).children().eq(2).css("border-top"," inset 1px #ffffff ");
             $(that.wheel).children().eq(2).css("border-bottom","outset 1px #ffffff ");
             $(that.wheel).children().eq(2).css("color","#000000");     
          
                  
    //reactivate the mouse event tracking for the next wheel turning                   
         tracking = true;   
    
};