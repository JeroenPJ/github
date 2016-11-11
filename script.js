function animation_one() {
  d = new Date();
  console.log("Anim one: " + d.getTime());
  $('#enter').remove();
  $('.name-container').css('display', 'block');
  $('.name-helper').css('display', 'block');
  $('.name-container').animate({ "font-size": "50px" }, 500, function() { setTimeout(animation_two, 300) });
}

function animation_two() {
  d = new Date();
  console.log("Anim two: " + d.getTime());
  $('#name-main').css("color", "#2B2B2B");
  $('.color-coder').css("color", "#EFDA63");
  $('.color-gamer').css("color", "#00D2F1");
}

// Check if input is 'Jeroen'
$('#enter').on("change keyup paste click", function(){
  if ($(this).val() == "Jeroen" || $(this).val() == "Jeroen ") {
    animation_one();
  }
});

// Check if cursor is on letters
$('#o').hover(function(){
  $('#name-coder').css("opacity", 1);
  $('body').css("background-color", "#EFDA63");
  $('#j').css("opacity", 0);
  $('#e1').css("opacity", 0);
  $('#r').css("opacity", 0);
  $('#o').css("color", "#000");
  $('#e2').css("opacity", 0);
  $('#n').css("opacity", 0);
}, function(){
  $('#name-coder').css("opacity", 0);
  $('body').css("background-color", "#fff");
  $('#j').css("opacity", 1);
  $('#e1').css("opacity", 1);
  $('#r').css("opacity", 1);
  $('#o').css("color", "#EFDA63");
  $('#e2').css("opacity", 1);
  $('#n').css("opacity", 1);
});

$('#e1').hover(function(){
  $('#name-gamer').css("opacity", 1);
  $('body').css("background-color", "#00D2F1");
  $('#j').css("opacity", 0);
  $('#e1').css("color", "#000");
  $('#r').css("opacity", 0);
  $('#o').css("opacity", 0);
  $('#e2').css("opacity", 0);
  $('#n').css("opacity", 0);
}, function(){
  $('#name-gamer').css("opacity", 0);
  $('body').css("background-color", "#fff");
  $('#j').css("opacity", 1);
  $('#e1').css("color", "#00D2F1");
  $('#r').css("opacity", 1);
  $('#o').css("opacity", 1);
  $('#e2').css("opacity", 1);
  $('#n').css("opacity", 1);
});

// Initializing input field
$('#enter').val("Jeroen Jagt");
$('#enter').focus();
