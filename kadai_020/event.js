//btnというidをもつhtml要素を取得し、定数に代入
const clickBtn = document.getElementById('btn');

//html要素がクリックされたらイベントを実行
clickBtn.addEventListener('click', () => {
   document.getElementById('text').textContent = 'ボタンをクリックしました';
});

