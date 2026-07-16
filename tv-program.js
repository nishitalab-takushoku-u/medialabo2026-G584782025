
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let num=1;
  for(let i of data.list.g1){
    console.log(num+"件目:"+i.title);
    console.log("番組説明:"+i.subtitle);
    console.log("開始時間:"+i.start_time);
    console.log("終了時間:"+i.end_time);
    console.log("出演者:"+i.act);
    console.log();
    num++;
  }
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let remove = document.querySelector('div#result');
  remove.remove();
  let service = document.querySelector('input[name="channel"]');
  let genre = document.querySelector('input[name="genre"]');
  let num=1;
  let div = document.createElement('div');
  let body = document.querySelector('body');
  body.insertAdjacentElement('beforeend',div)
  div.setAttribute('id','result')
  if(service.value=='g1'){
    let b =document.createElement('b');
    div.insertAdjacentElement('beforeend',b);
    if(data.list==null){
      h3 =document.createElement('h3');
      div.insertAdjacentElement('beforeend',h3);
      h3.textContent="検索条件に合う番組はございません。";
      h3.classList.add('maintext'); 
      let p =document.createElement('p');
      div.insertAdjacentElement('beforeend',p);
      p.textContent="別の条件でご検索ください";
      p.classList.add('maintext'); 
    }
    b.textContent="(検索結果"+data.list.g1.length+"件)";
    b.classList.add('subtext'); 

    for(let i of data.list.g1){
      let h3 =document.createElement('h3');
      div.insertAdjacentElement('beforeend',h3);
      h3.textContent=num+"件目:"+i.title;
      h3.classList.add('title'); 

      h3 =document.createElement('h3');
      div.insertAdjacentElement('beforeend',h3);
      h3.textContent="番組説明";
      h3.classList.add('maintext'); 

      let p =document.createElement('p');
      div.insertAdjacentElement('beforeend',p);
      p.textContent=i.subtitle;
      p.classList.add('maintext'); 

      p =document.createElement('p');
      div.insertAdjacentElement('beforeend',p);
      p.textContent="開始時刻:"+i.start_time;
      p.classList.add('maintext'); 

      p =document.createElement('p');
      div.insertAdjacentElement('beforeend',p);
      p.textContent="終了時刻:"+i.end_time
      p.classList.add('maintext'); 

      h3 =document.createElement('h3');
      div.insertAdjacentElement('beforeend',h3);
      h3.textContent="出演者";
      h3.classList.add('maintext'); 

      let ul =document.createElement('ul');
      div.insertAdjacentElement('beforeend',ul);
      if(i.act==""){
        let li = document.createElement("li");
        ul.insertAdjacentElement('beforeend',li);
        li.textContent="記載なし";
      }
      else{
        for (let acts of i.act.split("，")) {
          let li = document.createElement("li");
          ul.insertAdjacentElement('beforeend',li);
          li.textContent=acts;
        }
      }
      num++;
      ul.classList.add('maintext'); 
    }
  }else if(service.value=='e1'){//e1の検索
    let b =document.createElement('b');
    div.insertAdjacentElement('beforeend',b);
    if(data.list==null){
      h3 =document.createElement('h3');
      div.insertAdjacentElement('beforeend',h3);
      h3.textContent="検索条件に合う番組はございません。";
      h3.classList.add('maintext'); 
      let p =document.createElement('p');
      div.insertAdjacentElement('beforeend',p);
      p.textContent="別の条件でご検索ください";
      p.classList.add('maintext'); 
    }
    b.textContent="(検索結果"+data.list.e1.length+"件)";
    b.classList.add('subtext'); 

    for(let i of data.list.e1){
      let h3 =document.createElement('h3');
      div.insertAdjacentElement('beforeend',h3);
      h3.textContent=num+"件目:"+i.title;
      h3.classList.add('title'); 

      h3 =document.createElement('h3');
      div.insertAdjacentElement('beforeend',h3);
      h3.textContent="番組説明";
      h3.classList.add('maintext'); 

      let p =document.createElement('p');
      div.insertAdjacentElement('beforeend',p);
      p.textContent=i.subtitle;
      p.classList.add('maintext'); 

      p =document.createElement('p');
      div.insertAdjacentElement('beforeend',p);
      p.textContent="開始時刻:"+i.start_time;
      p.classList.add('maintext'); 

      p =document.createElement('p');
      div.insertAdjacentElement('beforeend',p);
      p.textContent="終了時刻:"+i.end_time
      p.classList.add('maintext'); 

      h3 =document.createElement('h3');
      div.insertAdjacentElement('beforeend',h3);
      h3.textContent="出演者";
      h3.classList.add('maintext'); 

      let ul =document.createElement('ul');
      div.insertAdjacentElement('beforeend',ul);
      if(i.act==""){
        let li = document.createElement("li");
        ul.insertAdjacentElement('beforeend',li);
        li.textContent="記載なし";
      }
      else{
        for (let acts of i.act.split("，")) {
          let li = document.createElement("li");
          ul.insertAdjacentElement('beforeend',li);
          li.textContent=acts;
        }
      }
      num++;
      ul.classList.add('maintext')
    }
    
  }
  service.value="";
  genre.value="";
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('button#sendRequest');
b.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
// URL を設定
  let service = document.querySelector('input[name="channel"]');
  let genre = document.querySelector('input[name="genre"]');
  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' +service.value + '-' + genre.value + '-j.json';
  // 通信開始
   axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
// サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    printDom(data)
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}