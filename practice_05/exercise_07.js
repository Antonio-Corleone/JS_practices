function sapXep() {
  var resulteX07 = document.querySelector("#resultEx07");
  // Tạo mảng tạm mới
  var tempArr = [];
  for (var i = 0; i < myArr.length; i++) {
    tempArr.push(myArr[i]);
  }
  // Sắp xếp tăng dần
  for (var i = 0; i < tempArr.length; i++){
    for (var j = 0; j < tempArr.length - 1; j++){
      if (tempArr[j] > tempArr[j + 1]){
        var temp = tempArr[j];
        tempArr[j] = tempArr[j + 1];
        tempArr[j + 1] = temp;
      }
    }
  }
  resulteX07.innerHTML = "Mảng sau khi sắp xếp: " + tempArr;
}
document.querySelector("#btn_07").onclick = sapXep;