
function timSoChan() {
  var resulteX05 = document.querySelector("#resultEx05");
  var soChanCuoi;
  for (var i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 == 0) {
      soChanCuoi = myArr[i];
    }
  }
  //Kiểm tra nếu mảng không có số chẵn thì hiện kết quả là -1
  if (soChanCuoi){
    resulteX05.innerHTML = soChanCuoi;
  }
  else{
    resulteX05.innerHTML = "-1";
  }
  
}
document.querySelector("#btn_05").onclick = timSoChan;