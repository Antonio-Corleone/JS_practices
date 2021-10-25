function soSanh() {
  var resulteX10 = document.querySelector("#resultEx10");
  var soDuong = 0;
  var soAm = 0;
  for (var i = 0; i < myArr.length; i++) {
    if (myArr[i] > 0){
      soDuong += 1;
    }
    else if (myArr[i] < 0){
      soAm += 1;
    }
  }
  if (soDuong > soAm){
    resulteX10.innerHTML = "Số dương > Số âm";
  }
  else if (soDuong < soAm){
    resulteX10.innerHTML = "Số âm > Số dương";
  }
  else{
    resulteX10.innerHTML = "Số âm = Số dương";
  }
}
document.querySelector("#btn_10").onclick = soSanh;