$(document).ready(function(){
	setInterval(function(){
		$('.dong_mask').css({'height':'0','opacity':'0'})
	},3000)
	$(window).scroll(function(){
		var top = $(window).scrollTop()
		var height = $('.move').height()
		var height1 = height/2
		var height_about = $('.about').height()
		var height2 = height_about/2
		var height_move = $('._move').height()
		var height3 = height_move
		var height_content = $('.content').height()
		var height4 = height_content/2
		var hei_top = $('.top').height()
		if(top>height){
			$('.top').css({'position':'fixed'})
		}else{
			$('.top').css({'position':'relative'})
		}
		if(top>height1){
			$('.about_h1').addClass("about_add")
		}else{
			$('.about_h1').removeClass("about_add")
		}
		if(top>height+height2){
			$('._move_h1').addClass('add_move_h1')
		}else{
			$('._move_h1').removeClass('add_move_h1')
		}
		if(top>height+height_about+height3-hei_top){
			$('.content_up').addClass('add_up')
			$('.content_right').addClass('add_Cright')
			$('.content_img').addClass('content_img_add')
		}else{
			$('.content_up').removeClass('add_up')
			$('.content_right').removeClass('add_Cright')
			$('.content_img').removeClass('content_img_add')
		}
		if(top>height+height_about+height_move+height4){
			$('.event_mask').addClass('event_mask_add')
		}else{
			$('.event_mask').removeClass('event_mask_add')
		}
		var c = Math.floor(top/height)
		$('.navi_li').eq(c).css({'color':'red'}).siblings().css({'color':'white'})
		console.log(c)
	})
	var i = 0
	$('.MR_li').eq(0).css({'opacity':'1'})
	$('._btn_left').click(function(){
		i--
		if(i<0){
			i = $('.ML_li').length-1
		}
		var w = $('.ML_li').width()
		$('.ML_ul').css({'margin-left':i*-w})
		$('.MR_li').eq(i).css({'opacity':'1'}).siblings().css({'opacity':'0'})
	})
	$('._btn_right').click(function(){
		i++
		if(i>$('.ML_li').length-1){
			i = 0
		}
		var w = $('.ML_li').width()
		$('.ML_ul').css({'margin-left':i*-w})
		$('.MR_li').eq(i).css({'opacity':'1'}).siblings().css({'opacity':'0'})
	})
	var doc = $('body').width(),
		allW = $('.E_con').width()
	$(document).mousemove(function(e){
		var mouseX = e.pageX,
			offset = mouseX / doc * allW - mouseX / 2
		$('.E_con_ul').css({
			'transform':'translate3d('+-offset+'px,0,0)',
			'transition':'0s'
		})
	})
	$('.navi_li').click(function(){
		var index = $(this).index()
		var hei = $('.move').height()
		var hei2 = $('.top').height()
		var hei = hei+hei2*5
		$('html,body').animate({'scrollTop':index*hei},400)
	})
})
