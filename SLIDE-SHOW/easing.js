
$(document).ready(function()
{

$("h1").click (function(){
    		
    $(this).toggleClass("minus");
    
        if ($(this).attr("class") === "minus") 
           {
	      $(this).next().slideUp(250,"swing"); 
              $(this).next().next().slideDown(250, "swing");
	   }
	 else {
	        $(this).next().next().slideUp(250, "swing");
                $(this).next().slideDown(250,"swing");
              }
        }       
	    
        );

  });