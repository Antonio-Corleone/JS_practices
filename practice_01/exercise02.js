/**
 * Khối 1:
 *  Người dùng nhập vào 5 số cần tính trung bình
 * Khối 2:
 *  B1: Tìm đến thẻ và lấy giá trị của 5 số người dùng nhập được gán vào 5 biến tương ứng
 *  B2: ép kiểu dữ liệu từ String về number cho 5 số vừa nhập bằng Number()
 *  B3: Tính tổng 5 số theo công thức: sum = num1 + num2 + num3 + num4 + num 5
 *  B4: Tính giá trị trung bình của tổng 5 số trên theo công thức: avarage = sum/5
 * Khối 3: Hiện kết quả giá trị trung bình của 5 số trên giao diện web
 */
function avarageCalc(){
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var num3 = Number(document.getElementById("num3").value);
  var num4 = Number(document.getElementById("num4").value);
  var num5 = Number(document.getElementById("num5").value);
  var sum = num1 + num2 + num3 + num4 + num5;
  var avg = sum/5;
  var text = document.getElementById("result_ex02");
  text.innerHTML = "Result: " + avg;
}
document.getElementById("btn_ex02").onclick = avarageCalc;