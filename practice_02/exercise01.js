/**
 * Khối 1:
 *  Nhập vào 3 số
 * Khối 2:
 *  B1: Tìm tới thẻ và lấy giá trị của 3 số được người dùng nhập trên giao diện
 *  B2: Gán giá trị lấy được vào các biến num1, num2, num3
 *  B3: Ép về kiểu number
 *  B4: So sánh và tìm giá trị nhỏ nhất gán vào num1
 *      Kiểm tra num1 > num2 ?
 *                    --> true thì thực hiện hoán đổi giá trị num1 và num2
 *                    --> false có nghĩa là num1 đã nhỏ hơn num2 nên không cần làm gì cả
 *      Kiểm tra num1 > num3 ?
 *                    --> true thì thực hiện hoán đổi giá trị num1 và num3
 *                    --> false có nghĩa là num1 đã nhỏ hơn num3 nên không cần làm gì cả
 *      So sánh và tìm giá trị nhỏ nhì gán vào num2
 *      Kiểm tra num2 > num3 ?
 *                    --> true thì thực hiện hoán đổi giá trị num2 và num3
 *                    --> false có nghĩa là num2 đã nhỏ hơn num3 nên không cần làm gì cả
 * Khối 3: Xuất lên giao diên 3 số theo thứ tự tăng dần: num1 < num2 < num3
 */
function sortNumber() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var num3 = Number(document.getElementById("num3").value);
  var txtEx01 = document.getElementById("resultEx01");
  // Sort the numbers in ascending order 
  var temp;
  if(num1 > num2){
    temp = num1;
    num1 = num2;
    num2 = temp;
  }
  if(num1 > num3){
    temp = num1;
    num1 = num3;
    num3 = temp;
  }
  if(num2 > num3){
    temp = num2;
    num2 = num3;
    num3 = temp;
  }
  txtEx01.innerHTML = num1 + " < " + num2 + " < " + num3;
}
document.getElementById("btn_ex01").onclick = sortNumber;