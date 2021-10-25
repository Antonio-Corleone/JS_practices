function timSoNguyenTo(){
  var resulteX08 = document.querySelector("#resultEx08");
  for (var i = 0; i < myArr.length; i++){
    // Kiểm tra nếu tìm thấy số nguyên tố thì hiện kết quả
    if(soNguyenTo(myArr[i])){
      resulteX08.innerHTML = soNguyenTo(myArr[i]);
      break;
    }
    else{
      resulteX08.innerHTML = "-1";
    }
  }
}
document.querySelector("#btn_08").onclick = timSoNguyenTo;

// Hàm tìm số nguyên tố
function soNguyenTo(param1){
  if (param1 >= 2){
    var count = 0;
    //Kiểm tra số có ước nào nằm trong vùng từ 2 đến sqrt(param1)
    for (var i = 2; i <= Math.sqrt(param1); i ++){
      if (param1 % i == 0){
        count += 1;
      }
    }
    // count = 0 thì trả về số nguyên tố
    if (count == 0){
      return param1;
    }
  }
}