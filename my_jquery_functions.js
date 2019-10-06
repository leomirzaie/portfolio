// JavaScript Document

// Is the dropdown being displayed
var display = false;
var active;

$(document).ready(function(){
	"use strict";
	hideAllSpecial();

	// When dropdown class is clicked - reveal the special items underneath it
    $(".dropdown").on({
		click:function(){
			// If click on un-active - hide all
			if(active != null && active != this){
				hideAllSpecial();
			}
			// If click on active or active is null
			active = this;
			var items = $(this).find('a.special');
			setupElements(items);
			playEffects(items);
		}
	});

	// When shiftRight link is hovered over - shift right
	$(".shiftRight").on({
		mouseenter:function(){
			shiftRight(this);
		},
		mouseleave:function(){
			shiftBack(this);
		},
	});

	// When special link is hovered over - shift right
	$(".special").on({
		mouseenter:function(){
			shiftRight(this);
		},
		mouseleave:function(){
			shiftBack(this);
		},
	});

});

// Hide all the special class links
function hideAllSpecial(){
	"use strict";
	// Hide all special items at the start
	var specialItems = $(document).find('a.special');
	$(specialItems).each(function(index){
		$(specialItems[index]).hide();
	});
}

// Setup the dropdown items to start a bit above their default position
function setupElements(items){
	"use strict";
	if(!display){
		$(items).each(function(index){
			$(items[index]).css("top", "-5px");
		});
	}
}

function shiftRight(element){
	"use strict";
	$(element).animate({left : '5%'}, 100);
}

function shiftBack(element){
	"use strict";
	$(element).animate({left : '0%'}, 100);
}

function playEffects(items){
	"use strict";
	// Toggle display actions
	if(!display){
		$(items).each(function(index){
			$(items[index])
				.fadeToggle({queue : false}, 500)
				.animate({top : '0px', queue : false}, 500);
		});
		display = true;
	} else {
		$(items).each(function(index){
			$(items[index])
				.animate({top : '-5px', queue : false}, 200)
				.fadeToggle({queue : false}, 200);
		});
		display = false;
	}
}
