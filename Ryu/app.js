$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	.mousedown(function() {
		playHadouken();
		$('ryu-ready').hide();
		$('ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '300px'},
			500,
			(function() { 
				$(this).hide();
				$(this).css('left', '-212px');
			})
		)
	})

	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})

});

    $(document).keydown(function(e) {
        if (e.which == 88) {
        playCool();
        $('.ryu-cool').show();
        $('.ryu-throwing').hide();
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        }
      });

	$(document).keyup(function(e) {
        if (e.which == 88) { 
        noCool();
		 $('.ryu-throwing').hide();
         $('.ryu-cool').hide();
         $('.ryu-still').hide();
         $('.ryu-ready').show();
        }
      });



function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playCool () {
	$('#cool-sound')[0].volume = 0.5;
	$('#cool-sound')[0].load();
	$('#cool-sound')[0].play();
}

function noCool () {
	$('#cool-sound')[0].volume = 0;
	$('#cool-sound')[0].load();
	$('#cool-sound')[0].play();

}




