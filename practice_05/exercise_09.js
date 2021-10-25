// Tạo mảng số thực
var myArr_2 = [];
document.querySelector("#btn_09_1").onclick = function(){
  var num = Number(document.querySelector("#newNum").value);
  var resulteX09_1 = document.querySelector("#resultEx09_1");
  myArr_2.push(num);
  resulteX09_1.innerHTML = "Mảng mới: " + myArr_2;
}
// Hàm đếm số nguyên
function demSoNguyen(){
  var resulteX09_2 = document.querySelector("#resultEx09_2");
  var count = 0;
  for (var i = 0; i < myArr_2.length; i++){
    if(Number.isInteger(myArr_2[i])){
      count += 1;
    }
  }
  resulteX09_2.innerHTML = "Số nguyên: " + count;
}
document.querySelector("#btn_09_2").onclick = demSoNguyen;