var myArr = [];
var result = document.querySelector("#result");
document.querySelector("#btn").onclick = function(){
  var n = Number(document.querySelector("#number").value);
  myArr.push(n);
  result.innerHTML = myArr;
}