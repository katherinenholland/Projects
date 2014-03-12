$(document).ready(function(){
	$('.button').click(function(){
		$('.list').append($('<li>',{
			text: $('.addItems').val()
		}))
	})
});