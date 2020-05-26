setTimeout(function(){
$('.main h1').text('hello roma')
}, 1000);

setTimeout(function(){
$('.main h1').css('color', 'red')
}, 1500);

$('.btn').on('click', function(){
    $('.main h1').text('privet')
});
var n = 0
$('.btn_box').on('click', function(){
    $('.box').toggleClass('left')
});
