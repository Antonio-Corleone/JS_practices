/**
 * Khối 1:
 *  Người dùng nhập vào tiền lương tính theo ngày và số ngày làm việc.
 * Khối 2:
 *  B1: tạo 2 biến salaryPerDay và day
 *  B2: Tìm tới thẻ và lấy giá trị gán vào 2 biến  vừa tạo ở B1
 *  B3: Sử dụng công thức tính lương: result =  salaryPerDay * day
 *  B4: Xuất kết quả result lên giao diện web
 * Khối 3:
 * Xuất kết quả tính lương ra trang web sau khi nhấn button trên giao diện.
 */

// Hàm tính lương nhân viên
function salaryCalc(){
  var salaryPerDay = document.getElementById("salary").value;
  var day = document.getElementById("days").value;
  var result = salaryPerDay * day;
  var text = document.getElementById("result");
  text.innerHTML = "Result: " + result;
}
document.getElementById("btn_ex01").onclick = salaryCalc;
