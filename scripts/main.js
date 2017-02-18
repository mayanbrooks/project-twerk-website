$('.main-menu').hover(function(){
    $(this).css("color", "purple")
});





$('.js-submit').click(function(){

});

// function doSomthing(){
// 	alert('Hi!');
// }

// $('body').click(doSomthing);






$('.main-sub-title')
  .transition('fly right')
;










$('.resizableImage').hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=10%', width: '+=10%'});
}
function returnToOriginalSize() {
    $(this).css({height: "180px", width: "250px"});
}