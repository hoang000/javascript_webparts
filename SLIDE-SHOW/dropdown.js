/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var timeout         = 500;
var closetimer  = 0;
var ddmenuitem      = 0;

function jsddm_open()
{	jsddm_canceltimer();
	jsddm_close();
	ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');      
}

function jsddm_close()
{	if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');
 }

function jsddm_click()
{    
     $('#jsddm >li:nth-child(6)').css('box-shadow', '0px 0px 2px 0.5px rgb(150,100,150)');
 }


function jsddm_timer()
{	closetimer = window.setTimeout(jsddm_close, timeout);
 }

function jsddm_canceltimer()
{	if(closetimer)
	{	window.clearTimeout(closetimer);
		closetimer = null;}}
        
function centerBobyMenubar()
{   var clientWidth,HISize,CRSize;   // HISize = the width of the headerimg div
                                                  //CRSize = the width of copyright div
    clientWidth = parseInt($(window).width());
    
 HISize = parseInt($(".headerimg").css("width").substring(0, ($(".headerimg").css("width").length-2)));
 CRSize = parseInt($("#copyright").css("width").substring(0, ($("#copyright").css("width").length-2)));   
    //center the headerimgs div element
    $("#headerimgs").css("left",(clientWidth-HISize)/2 + "px");
     //center the jsddm element (namely the menubar)
    $("#all").css("left", 50 + (clientWidth-HISize)/2 + "px");
    
   // center the copyright div element
    $("#copyright").css("left",(HISize- CRSize)/2 + (clientWidth-HISize)/2 + "px");
    
    
}

$(document).ready(function()
{	$('#jsddm > li').bind('mouseover', jsddm_open);
	$('#jsddm > li').bind('mouseout',  jsddm_timer);
                    $('#jsddm >li:nth-child(6)').bind('click',jsddm_click);

        $(".image_list img").bind('click',function () {
         
        $("#spinner").attr("src", $(this).attr("src")).fadeIn(1000);
        

       
        });
 
        $("#spinner").bind('click',function () {
         $("#spinner").hide();
       
        });
        
      centerBobyMenubar();

});
    
        

document.onclick = jsddm_close;


