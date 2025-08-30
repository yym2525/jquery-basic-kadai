$(function () {

  $('#change-color').on('click', function () {
      // 文字を赤 
      $('#target').css('color', 'red');
    });

      $('#change-text').on('click', function () {
      // 文字を変化 
      $('#target').text('Hello!');
    });

      $('#fade-out').on('click', function () {
    // 不透明度を0にする（フェードアウトする）
    $('#target').fadeOut();
  });

  $('#fade-in').on('click', function () {
    // 不透明度を1にする（フェードインする）
    $('#target').fadeIn();
  });
  });