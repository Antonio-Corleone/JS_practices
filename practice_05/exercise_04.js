function timSoDuongNhoNhat(){
  var resulteX04 = document.querySelector("#resultEx04");
  // Tạo mảng mới để lưu giá trị các số dương
  var newArr = [];
  for (var i = 0; i < myArr.length; i++){
    if (myArr[i] > 0){
      newArr.push(myArr[i]);
    }
  }
  if (newArr.length > 0){
    var viTri = 0;
    min = newArr[viTri];
    for (var i = 1; i < newArr.length; i++){
      if (min > newArr[i] && newArr[i] != 0){
        min = newArr[i];
        viTri = i;
      }
    }
    resulteX04.innerHTML = min;
  }
  else{
    resulteX04.innerHTML = "Không có số dương";
  }
  
}
document.querySelector("#btn_04").onclick = timSoDuongNhoNhat;