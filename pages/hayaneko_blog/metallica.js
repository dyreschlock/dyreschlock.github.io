//(function($){
//	$.metallica = function(click_object, entry_id){
//		var window_x, window_y; // coord of window
//		var mouse_x, mouse_y; // coord of mouse
//		
//		// init
//		window_x = click_object.pageX;
//		window_y = click_object.pageY;
//		
//		
//		// display popup window
//		$("#metallica_wrapper_" + entry_id).css('top', window_y).css('left', window_x).fadeIn(50);
//		
//		// close
//		$("#metallica_close_" + entry_id).click(function(){$("#metallica_wrapper_" + entry_id).fadeOut(50);});
//		
//		// drag title
//		$("#metallica_title_" + entry_id).mousedown(function(e){
//			mouse_x = e.pageX;
//			mouse_y = e.pageY;
//			$().mousemove(mouseMove).mouseup(mouseUp);
//			return false;
//		});
//		
//		function mouseMove(e){
//			window_x += e.pageX - mouse_x;
//			window_y += e.pageY - mouse_y;
//			$("#metallica_wrapper_" + entry_id).css('top', window_y).css('left', window_x);
//			mouse_x = e.pageX;
//			mouse_y = e.pageY;
//			return false;
//		}
//		
//		function mouseUp(){
//			$().unbind('mousemove', mouseMove).unbind('mouseup', mouseUp);
//		}
//	}
//})(jQuery);

(function($){
	$.metallica = function(click_object, entry_id, object_name_prefix){
		if(object_name_prefix == undefined){
			object_name_prefix = 'metallica';
		}
		
		var window_x, window_y; // coord of window
		var mouse_x, mouse_y; // coord of mouse
		
		// init
		window_x = click_object.pageX;
		window_y = click_object.pageY;
		
		
		// display popup window
		$("#" + object_name_prefix + "_wrapper_" + entry_id).css('top', window_y).css('left', window_x).fadeIn(50);
		
		// close
		$("#" + object_name_prefix + "_close_" + entry_id).click(function(){$("#" + object_name_prefix + "_wrapper_" + entry_id).fadeOut(50);});
		
		// drag title
		$("#" + object_name_prefix + "_title_" + entry_id).mousedown(function(e){
			mouse_x = e.pageX;
			mouse_y = e.pageY;
			$().mousemove(mouseMove).mouseup(mouseUp);
			return false;
		});
		
		function mouseMove(e){
			window_x += e.pageX - mouse_x;
			window_y += e.pageY - mouse_y;
			$("#" + object_name_prefix + "_wrapper_" + entry_id).css('top', window_y).css('left', window_x);
			mouse_x = e.pageX;
			mouse_y = e.pageY;
			return false;
		}
		
		function mouseUp(){
			$().unbind('mousemove', mouseMove).unbind('mouseup', mouseUp);
		}
	}
})(jQuery);