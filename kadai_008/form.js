$(function () {
   //calss btn をクリックしたら
   $('.btn').on('click', function () {
      //textboxにクリックしました！と表示する
      $('.text-box').val('クリックされました！');
   });
});