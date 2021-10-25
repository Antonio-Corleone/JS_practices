//Tính tổng số dương
function tinhTongSoDuong(){
  var resulteX01 = document.querySelector("#resultEx01");
  var sum = 0;
  for (var i = 0; i < myArr.length; i++){
    //Kiểm tra số dương
    if (myArr[i] > 0){
      sum += myArr[i];
    }
  }
  resulteX01.innerHTML = sum;
}
document.querySelector("#btn_01").onclick = tinhTongSoDuong;