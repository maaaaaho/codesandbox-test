import "./styles.css";

//追加ボタンの動作
const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value; //値を取得
  document.getElementById("add-text").value = "";
  // alert(inputText);

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //DOMの作成
  //①div生成
  const div = document.createElement("div"); //HTMLのDOMを作成
  div.className = "list-row"; //class名を付与

  //②listタグ生成
  const li = document.createElement("li");
  li.innerText = text; //中身を置き換え

  //button(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode; //要素を取得
    // console.log(deleteTarget);
    deleteFromIncompleteList(deleteTarget);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //ToDo内容テキストを取得
    const text = addTarget.firstElementChild.innerText; //ここではliタグ
    // console.log(text);

    //div以下を初期化
    addTarget.textContent = null;
    // console.log(addTarget);

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    // console.log(li);

    //buttonタグ製紙絵
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      // console.log(text);
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // console.log(addTarget);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
  // console.log(completeButton);

  //button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // alert("削除");
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode; //要素を取得
    // console.log(deleteTarget);
    //document.getElementById("incomplete-list").removeChild(deleteTarget); //子要素から特定の要素を削除
    deleteFromIncompleteList(deleteTarget);
  });
  // console.log(deleteButton);

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // console.log(div);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//IDを取得
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd()); //クリックイベントの付与。と関数を渡す。
