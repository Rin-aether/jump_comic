$('.jump-plus').hide();

$(function(){
  $('#one').on('click',function(){
    $('#b1').addClass("add");
    $('#b2').removeClass("add");
    $('.jump-comics').show();
    $('.jump-plus').hide();
    });
});
$(function(){
  $('#two').on('click',function(){
    $('#b2').addClass("add");
    $('#b1').removeClass("add");
    $('.jump-plus').show();
    $('.jump-comics').hide();
    });
});
// ///////////////////////
$(function(){
  $('#all').on('click',function(){
    $('.shops_btn').removeClass('now');
    $('#allclass').addClass("now");
    $('.info').show();
    });
});
$(function(){
  $('#tokyo').on('click',function(){
    $('.shops_btn').removeClass('now');
    $('#tokyoclass').addClass("now");
    $('.info').hide();
    $('.tokyo').show();
    });
});
$(function(){
  $('#osaka').on('click',function(){
    $('.shops_btn').removeClass('now');
    $('#osakaclass').addClass("now");
    $('.info').hide();
    $('.osaka').show();
    });
});
$(function(){
  $('#etc').on('click',function(){
    $('.shops_btn').removeClass('now');
    $('#etcclass').addClass("now");
    $('.info').hide();
    $('.etc').show();
    });
});
/////////////////////////
function PageTopAnime(){
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//上から200pxスクロールしたら
	$('.footer__page-top').removeClass('RightMove');
	$('.footer__page-top').addClass('LeftMove');
	}else{
		if($('.footer__page-top').hasClass('LeftMove')){
				$('.footer__page-top').removeClass('LeftMove');
				$('.footer__page-top').addClass('RightMove');
			}
		}
}

$(window).scroll(function () {
	PageTopAnime();
});

$('.footer__page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);//ページトップスクロールの速さ
    return false;
});

function delayScrollAnime() {
	var time = 0.2;//遅延時間を増やす秒数の値
	var value = time;
	$('.delayScroll').each(function () {
		var parent = this;					//親要素を取得
		var elemPos = $(this).offset().top;//要素の位置まで来たら
		var scroll = $(window).scrollTop();//スクロール値を取得
		var windowHeight = $(window).height();//画面の高さを取得
		var childs = $(this).children();	//子要素を取得

		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
			$(childs).each(function () {
				if (!$(this).hasClass("fadeUp")) {
					$(parent).addClass("play");	//親要素にクラス名play
					$(this).css("animation-delay", value + "s");
					$(this).addClass("fadeUp");
					value = value + time;
					//全ての処理を終わったらplayを外す
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}}
			})
		}else {
			$(childs).removeClass("fadeUp");
			value = time;//delay初期値の数値に戻す
		}})}
	$(window).scroll(function (){
		delayScrollAnime();
	});// ここまで画面をスクロールをしたら動かしたい場合の記述



$('.slider').slick({
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
});
