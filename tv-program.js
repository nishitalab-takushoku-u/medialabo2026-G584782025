
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
  let num=1;
  let div = document.createElement('div');
  let body = document.querySelector('body');
  body.insertAdjacentElement('beforeend',div)
  div.setAttribute('id','result')

  let b =document.createElement('b');
  div.insertAdjacentElement('beforeend',b);
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
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

