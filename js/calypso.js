$(document).ready(function(){

	$('.toggle--switch').click(function(){
		$('.switch').toggleClass('visible');
	});

	var target = $('.target').val();
	console.log(target);

	$('.toggle--zoom').click(function(){
		$(this).toggleClass('active');
		$(target).toggleClass('target--zoom');
	});

	$('.list--pivot li').click(function(){
		var targetAttr = $(this).parent().attr('data-target');
		console.log(targetAttr);
		var newAttrType = 'data-' + targetAttr + '';
		console.log(newAttrType);
		var newAttr = $(this).attr(newAttrType);
		console.log(newAttr);

		if ($(this).hasClass('active')){
			$(this).removeClass('active');
			$(target).attr(newAttrType,'');
		} else {
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			$(target).attr(newAttrType,newAttr);
		}
	});

});