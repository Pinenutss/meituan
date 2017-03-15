var mySwiper = new Swiper('.swiper-container', {
    autoplay: 2000,
    pagination : '.swiper-pagination'
});

/**区域选择**/
var indexMaskHandler = (function(){
	//打开弹窗
	$(".xz-qy").on("click",function(){
		$(".index-mask").show();
	})
	//关闭弹窗
	$(".icon-cha").on("click",function(){
		$(".index-mask").hide();
	})
	//选择区域后
	$('.mask-2 label').on('click',function(){
		var _txt = $(this).text();
		$(".xz-qy").find('span').text(_txt);
		$(".index-mask").hide()
	})
})()
