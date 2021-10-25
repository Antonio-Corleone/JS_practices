function timSoNhoNhat(){
  var resulteX03 = document.querySelector("#resultEx03");
  var viTri = 0;
  var min = myArr[viTri];
  for (var i = 1; i < myArr.length; i++){
    if (min > myArr[i]){
      min = myArr[i];
      viTri = i;
    }
  }
  resulteX03.innerHTML = min;
}
document.querySelector("#btn_03").onclick = timSoNhoNhat;