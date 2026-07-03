// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let flag = 0;

let renzoku = 0;
// そのほか，必要に応じて変数を宣言してもよい

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  if(flag==0){
    kaisu++;
  }
  span=document.querySelector('span#kaisu')
  span.textContent=kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新

  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso;
  yoso = document.querySelector('input[name="kazuate"]');
  // ここまで: テキストボックスに指定された数値を yoso に代入する

  //予想された値の出力
  suji=document.querySelector('span#yoso')
  suji.textContent=yoso.value
  
  // ここから: 正解判定する
  p=document.querySelector('p#result')
  if(flag==1){
    p.textContent='答えは'+kotae+'でした。すでにゲームは終了しています'
  }
  else if(yoso.value==kotae){
    p.textContent='正解です。おめでとう!'
    flag = 1;
    renzoku++;
    span=document.querySelector('span#renzoku')
    span.textContent=renzoku;
  }
  else if(yoso.value<kotae){
    if(kaisu<3){
      p.textContent='不正解。答えはもっと大きいです。'
    }else{
      p.textContent='不正解。残念でした、答えは'+kotae+'です。'
      flag = 1;
      renzoku=0;
      span=document.querySelector('span#renzoku')
      span.textContent=renzoku;
    }
  }
  else{
    if(kaisu<3){
      p.textContent='不正解。答えはもっと小さいです'
    }else{
      p.textContent='不正解。残念でした、答えは'+kotae+'です。'
      flag = 1;
      renzoku=0;
      span=document.querySelector('span#renzoku')
      span.textContent=renzoku;
    }
  }
  if(flag==1){
    retry = document.querySelector('button#retry')
    retry.disabled = null;
  }
  // 　　　　  正解/不正解のときのメッセージを表示する

  // ここまで: 正解判定する
}


//オリジナル要素retryの定義
function Retry() {
  flag=0;
  kaisu=0;
  kotae = Math.floor(Math.random()*10) + 1;
  console.log('答え（デバッグ用）: ' + kotae);
  retry.disabled = "disabled";
  p.textContent='ここに判定結果を表示します'
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
b = document.querySelector('button#hantei');
b.addEventListener('click', hantei);
retry = document.querySelector('button#retry');
retry.addEventListener('click', Retry);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
