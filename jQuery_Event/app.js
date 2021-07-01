
// スライドUp & スライドDown
$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color':'#0000ff',
      'width':'200px',
      'height':'100px'
    }).slideUp();
  });
});

// ポインターが乗った時
$(function(){
  $('.box2').mouseover(function(){
    $('.box2').css({
      'background-color':'#0000ff'
    });
  });

  $('.box2').mouseout(function(){
    $('.box2').css({
      'background-color':'#ff0000'
    });
  });
});


// クリックした時
$(function(){
  $('.box3').on('click',function(){
    $('.box3').addClass('box3-ext');
  });
  $('.box3').mouseout(function(){
    $('.box3').removeClass('box3-ext');
  });
});