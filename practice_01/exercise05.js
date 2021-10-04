/**
 * Khối 1:
 *  Nhập số cần tính tổng các ký số
 * Khối 2:
 *  B1: Tìm tới thẻ lấy giá trị và gán cho vào biến number
 *  B2: Tách hàng chục gán vào biến ten
 *  B3: Tách hàng đơn vị gán vào biến unit
 *  B4: Tính tổng các ký số sumIndex = ten + unit
 * Khối 3: Hiện tổng các ký số lên giao diện web
 */
function sumIndexCalc (){
  var number = Number(document.getElementById("number").value);
  var ten = Math.floor(number/10);
  var unit = Math.floor(number%10);
  var sumIndex = ten + unit;
  var text_ex05 = document.getElementById("result_ex05");
  text_ex05.innerHTML = "Result: " + sumIndex;
}
document.getElementById("btn_ex05").onclick = sumIndexCalc;