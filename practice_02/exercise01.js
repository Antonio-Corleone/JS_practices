/**
 * Khối 1:
 *  Nhập vào 3 số
 * Khối 2:
 *  B1: Tìm tới thẻ và lấy giá trị của 3 số được người dùng nhập trên giao diện
 *  B2: Gán giá trị vào các biến num1, num2, num3
 *  B3: ép về kiểu number
 *  B4: So sánh num1 với num2
        if (num1 > num2){
          if(num2 > num3){
            first = num3;
            second = num2;
            last = num1;
          }
          else{ //num2 < num3
            if(num1 > num3){
              first = num2;
              second = num3;
              last = num1;
            }
            else{//num1 < num3
              first = num2;
              second = num1;
              last = num3;
            }
          }
        }
        else{ // num1 < num2
          if(num2 < num3){
            fist = num1;
            second = num2;
            last = num3;
          }
          else{// num2>num3
            if(num1 > num3){
              first = num3;
              second = num1;
              last = num2;
            }
            else{ //num1 < num3
              first = num1;
              second = num3;
              last = num2;
            }
          }
        }
 * Khối 3: Xuất lên giao diên 3 số theo thứ tự tăng dần
 */
function sortNumber() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var num3 = Number(document.getElementById("num3").value);
  var txtEx01 = document.getElementById("resultEx01");
  var first, second, last;
  // Sort the numbers in ascending order 
  if (num1 > num2) {
    if (num2 > num3) {
      first = num3;
      second = num2;
      last = num1;
    }
    else { //num2 < num3
      if (num1 > num3) {
        first = num2;
        second = num3;
        last = num1;
      }
      else {//num1 < num3
        first = num2;
        second = num1;
        last = num3;
      }
    }
  }
  else { // num1 < num2
    if (num2 < num3) {
      first = num1;
      second = num2;
      last = num3;
    }
    else {// num2>num3
      if (num1 > num3) {
        first = num3;
        second = num1;
        last = num2;
      }
      else { //num1 < num3
        first = num1;
        second = num3;
        last = num2;
      }
    }
  }
  txtEx01.innerHTML = first + " < " + second + " < " + last;
}
document.getElementById("btn_ex01").onclick = sortNumber;