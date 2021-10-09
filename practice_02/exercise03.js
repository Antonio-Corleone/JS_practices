/**
 * Khối 1:
 *  Nhập giá trị 3 số trên giao diện web
 * Khối 2:
 *  B1: Tìm đến thẻ và lấy giá trị 3 số nhập được gán vào biến num1, num2, num3
 *      Tạo biến count = 0;
 *  B2: Ép kiểu number
 *  B3: kiểm tra num1 chia hết cho 2?
 *                --> true: Tăng biến count lên 1
 *                --> false: không làm gì cả
 *      Kiểm tra num2 chia hết cho 2?
 *                --> true: Tăng biến count lên 1
 *                --> false: Không làm gì cả
 *      Kiểm tra num3 chia hết cho 2?
 *                --> true: Tăng biến count lên 1
 *                --> false: Không làm gì cả
 *      var odd = count;
 *      var even = 3 - count;
 * Khối 3:
 *  Hiện kết quả đếm số lượng số chẵn (odd) và số lẻ (even)
 */
function countOddEven(){
  var num1 = Number(document.getElementById("number1").value); 
  var num2 = Number(document.getElementById("number2").value); 
  var num3 = Number(document.getElementById("number3").value);
  var count = 0;
  var txtEx03 = document.getElementById("resultEx03");
  if (num1%2 == 0){
    count  += 1;
  }
  if (num2%2 == 0){
    count  += 1;
  }
  if (num3%2 == 0){
    count  += 1;
  }
  var odd = count;
  var even = 3 - count;
  txtEx03.innerHTML = "There are: " + odd + " " + "odd number," + " " + even + " " + "even number";
}
document.getElementById("btn_ex03").onclick = countOddEven;