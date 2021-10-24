var resulteX02 = document.querySelector("#resultEx02");
function demSoDuong() {
  var count = 0;
  for (var i = 0; i < myArr.length; i++) {
    //Kiểm tra số dương
    if (myArr[i] > 0) {
      count += 1;
    }
  }
  resulteX02.innerHTML = count;
}
document.querySelector("#btn_02").onclick = demSoDuong;