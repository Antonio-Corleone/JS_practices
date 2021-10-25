function doiCho() {
  var resulteX06 = document.querySelector("#resultEx06");
  var viTri_01 = Number(document.querySelector("#index01").value);
  var viTri_02 = Number(document.querySelector("#index02").value);
  // Tạo một mảng tạm
  var tempArr = [];
  for (var i = 0; i < myArr.length; i++) {
    tempArr.push(myArr[i]);
  }
  if (tempArr.length > 0){
    var temp = tempArr[viTri_01];
    tempArr[viTri_01] = tempArr[viTri_02];
    tempArr[viTri_02] = temp;
    resulteX06.innerHTML = "Mảng sau khi đổi: " + tempArr;
  }

}
document.querySelector("#btn_06").onclick = doiCho;