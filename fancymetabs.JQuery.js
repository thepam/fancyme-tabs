/* FancyMe Tabs Plugin
 * By Pamela Rodriguez
 * Free to use
 * Link backs are appreciated :)
 * www.thepamrdz.com
 */

(function($){

$.fn.fancymetabs = function(params){
    params = $.extend( {
	  theme: 'default', // Available themes: blue, red, orange, green, pink, black, yellow, and purple
	  tabheight: 'auto', //Height of the tab containers. Default is auto (depending on the content), any 
	  }, params);     //other value should be in pixels (e.j: '400px')
	var main = $(this);
	var tabberid = $(this).attr("id");
	main.addClass('fancyme-tabs');//Adds class to main element
	if(params.theme != "default"){
		main.addClass(params.theme); //Adds theme class
	}
	if(params.tabheight != "auto"){
		$("#"+tabberid+".fancyme-tabs > div").css("height", params.tabheight);
	}
	$("#"+tabberid+".fancyme-tabs > div").hide();//Hides all tabs content
	$("#"+tabberid+".fancyme-tabs > div").eq(0).show();//Shows the first tab	
	//Click event listener for list elements (headers of the tab menu)
	$("#"+tabberid+".fancyme-tabs > ul li").click(function(){
		$(this).siblings().removeClass("current");
		$(this).addClass("current");//Adds the identifying class to the selected tab
		var tab = parseInt($(this).index());//Gets the selected list element's index
		$("#"+tabberid+".fancyme-tabs > div").hide();//Hides all tabs
		$("#"+tabberid+".fancyme-tabs > div").eq(tab).show();//Shows the selected tab according to the index obtained
	});
};

})(jQuery); 