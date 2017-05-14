$('.main-menu').hover(function(){
    $(this).css("color", "#000066");
});

$('.nav-links').hover(function(){
  $(this).css("color", "#000066");
});

$('.open-modal').click(function() {
  $('.ui.modal.mymodal')
    .modal('show');
});

// lua code for stripe



$('.js-submit').click(function(){
  $(this).html('Submitted');
});




// $('.resizableImage').hover(makeBigger, returnToOriginalSize);

// function makeBigger() {
//     $(this).css({height: '+=2%', width: '+=2%'});
// }
// function returnToOriginalSize() {
//     $(this).css({height: "180px", width: "250px"});
// }



$('.resizableImageBrandon').hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=3%', width: '+=3%'});
}
function returnToOriginalSize() {
    $(this).css({height: "516px", width: "387px"});
}




$('.ui.accordion')
  .accordion()
;
