/**
 * const, let当の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
//let val2 = "let変数と再宣言";

const val3 = "const変数";
console.log(val3);

//const変数は上書き不可
//val3 = "const変数を上書き";

//const変数は再宣言不可
//const val3 = "const変数を再宣言";

const val4 = {
  name: "じゃけぇ",
  age: 28
};

//console.log(val4);

//constで定義したオブジェクトはプロパティの変更が可能
val4.name = "jak";
console.log(val4);
val4.address = "Hiroshima";
console.log(val4);

//constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * ★基本的にはconstを使うことが多い
 */

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;

// //「私の名前はじゃけぇです。年齢は28歳です。」

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str){
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

//アロー関数
//※引数が1つの時は()なくてもいい
//処理が1列の時はreturn、{}なしで書ける（const func2 = (str) => str;）
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
//const func3 = (num1, num2) => num1 + num2;　でも可。

console.log(func3(10, 20));

/**
 * 分割代入　（ES2015で追加された）
 */
//オブジェクト
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

//配列
const myProfile = ["じゃけぇ", 28];
const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
console.log(message3);

const [name, age] = myProfile; //設定順に入る　※オブジェクトと違い、順番に注意。
const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message4);

/**
 * デフォルト値、引数など
 * ※引数なしの場合はundifinedと表示される　→バグになりかねないのでデフォルト値を設定する
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello("じゃけぇ");

/**
 * スプレッド構文　...
 */
//①　配列の展開
// const arr1 = [1, 2];
// console.log(arr1);      //配列として表示
// console.log(...arr1);   //配列の中身を順番に表示

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);   //l144と同じ結果

//②　まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2; //右辺はデータのソース
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//③　配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4]; //arr4の配列をarr6にコピー
arr6[0] = 100;
console.log(arr6);
console.log(arr4); //arr4は影響を受けていない

// const arr7 = [...arr4, ...arr5]; //2つ以上の配列を結合
//console.log(arr7);

// なぜスプレッド構文を使うのか　→＝でコピーすると元の配列にも影響を与えるため
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理　※forをほぼ使わなくなった
 */
//従来
const nameArr = ["田中", "山田", "じゃけぇ"];
// for ( let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// //map 配列に対して使える。中にアロー関数。
//(1)ループをもとに新たな配列を生成する
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// //(2)配列を単にループする
// nameArr.map((name)=> console.log(name));
//※第2引数はindex
//nameArr.map((name, index)=> console.log(`${index+1}番目は${name}です`));

// //filter　配列に対してある条件(return)に一致するものだけをとる出す際に使用
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num)=>{
//   return num %2 === 1;
// });
// console.log(newNumArr);

//実践的なmap
const newNameArr = nameArr.map((name) => {
  if (name === "じゃけぇ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子　※ES2015からのものではない。使い方によっては可読性が悪いので注意。
 */
//ある条件　? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());  //3桁区切りのメソッド(数値のみ)

// const formattedNum = typeof num ==='number' ? num.toLocaleString() : '数値を入力してください';  //typeofはその変数の型を判定(JS)
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です";
};

console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう　&& ||
 */
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か2はtrueになります　※1も2もの場合もある");
}
// if (flag1 && flag2){
//   console.log("1も2はもtrueになります");
// }

// ||　は左側がfalseなら右側を返す
// const num = null;   //JSではnullはfalse判定
// const fee = num || "金額未設定です";
// console.log(fee);

// &&　は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
