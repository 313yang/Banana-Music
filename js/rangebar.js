$('input[type=range]').on('input', function(){
    var val = $(this).val();
    $(this).css('background', 'linear-gradient(to right, var(--yellow) 0%, var(--yellow) '+ val +'%, whitesmoke ' + val + '%, whitesmoke 100%)');
  });