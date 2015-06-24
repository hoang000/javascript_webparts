
$(document).ready(function() {
	var timer;
       
	var slider = $(".image_list");                     // slider = ul element
	var leftProperty, newleftProperty;
		
	// the click event handler for the right button						
	$("#right_button").mouseover(function() { 
	     clearInterval(timer);
             timer   =  setInterval(function(){
                 leftProperty = parseInt(slider.css("left"));
                 if (leftProperty < 0  )
             
                 {   newLeftProperty = leftProperty + 100;  
             
                     slider.animate ({left: newLeftProperty}, 1000);}
             
             }, 1500);
            // get value of current left property
    	/*	leftProperty = parseInt(slider.css("left"));
		  
                  
		// determine new value of left property
		if (leftProperty  < 0 ) {
		
			newLeftProperty = leftProperty + 100; }
		else
                {
                       newLeftProperty = -500;
                }
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 2000);
	*/
	});  // end click
        
	
	// the click event handler for the left button
	$("#left_button").mouseover(function() {
	     
          
           
            clearInterval(timer);
	      
         timer   =  setInterval(function(){
                 leftProperty = parseInt(slider.css("left"));
                 if (leftProperty > -3200  )
             
                 {   newLeftProperty = leftProperty -100;                                      
             
                     slider.animate ({left: newLeftProperty}, 1000);}
             
             }, 1500);
            
            //clearInterval(timer);
            /*	// get value of current right property
		leftProperty = parseInt(slider.css("left"));
		
		// determine new value of left property
		if (leftProperty > - 500) {
			newLeftProperty =  leftProperty -100;
		}
		else {
			newLeftProperty = 0;
		}
		
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 2000);				
           */
	});  // end click		
}); // end ready