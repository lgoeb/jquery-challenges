//script for mobile nav
$('#btn-menu').click(function(){
	$('.nav-main').slideDown();
});


//panels
$('.panel-content').hide();

$('.panel-title').click(function(){
	//$('.panel-content').slideToggle();
	$(this).next().slideToggle();
});