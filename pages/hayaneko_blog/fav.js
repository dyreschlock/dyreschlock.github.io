(function($){

$(document).ready(function() {
	var entry_id;
	var class_name;
	// popup window which includes users who added favs
	$("div[id^='fav_popup']").click(function(e) {
			entry_id = $(this).attr("id").split("_").pop();
			class_name = $(this).attr("class");
			if($("#fav_popup_" + entry_id).text() != '0' && class_name.toString().match(/^fav_popup/)){
				$.metallica(e, entry_id);
			}
		}
	);
	
	$("div[id^='fav_popup']").hover(
	        function(){
	        	entry_id = $(this).attr("id").split("_").pop();
	        	$("#fav_popup_" + entry_id).css('background-image', 'url(https://imaging.jugem.jp/user_blog/love/images/add_bubble_on.gif)');
	        },
	        function(){
	        	$("#fav_popup_" + entry_id).css('background-image', 'url(https://imaging.jugem.jp/user_blog/love/images/add_bubble.gif)');
	        }
    );
	
	var num_prev;
	var num_renew;
	$("div[id^='fav_add']").hover(
        function(){
        	entry_id = $(this).attr("id").split("_").pop();
        	num_prev = $("#fav_popup_" + entry_id).text();
        	num_renew = parseInt(num_prev);
        	$("#fav_add_" + entry_id).css('background-image', 'url(https://imaging.jugem.jp/user_blog/love/images/add_heart_on.gif)');
        },
        function(){
        	$("#fav_add_" + entry_id).css('background-image', 'url(https://imaging.jugem.jp/user_blog/love/images/add_heart.gif)');
        	$("#fav_popup_" + entry_id).text(num_renew);
        }
	);
	
	var domain;
	var url;
	// add fav to entry
	$("div[id^='fav_add']").click(function(e) {
		entry_id = $(this).attr("id").split("_").pop();
		domain = $(this).attr("domain");
		url = 'http://' + domain + '/api/add_fav.php?entry_id=' + entry_id + '&callback=?';
	    $.getJSON(
	    		url,
	    		function(data, status){
					if(data.result != '500'){
						$("#fav_popup_icons_" + entry_id).html(data.result);
						num_prev = num_renew;
			        	num_renew++;
			        	$("#fav_popup_" + entry_id).text(num_renew);
					}else{
						$.metallica(e, entry_id, 'login_popup');
					}
	    		}
	    );
	});
});

})(jQuery.noConflict(true));