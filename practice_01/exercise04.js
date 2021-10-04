/**
 * Khối 1:
 *  Nhập kích thước chiều dài và chiều rộng của hình chữ nhật
 * Khối 2:
 *  B1: Tìm tới thẻ lấy giá trị người dùng nhập được vào 2 biến width và height
 *  B2: Tính chu vi hình chữ nhật theo công thức perimeter = (width + height)*2
 *  B3: Tính diện tích hình chữ nhật theo công thức area = width * height
 * Khối 3: Hiện kết quả tính chu vi và diện tích hình chữ nhật lên giao diện web
 */
function rectangle (){
  var width = Number(document.getElementById("width").value);
  var height = Number(document.getElementById("height").value);
  var perimeter = (width + height) * 2;
  var area = width * height;
  var text_ex041 = document.getElementById("result_ex04-1");
  text_ex041.innerHTML = "Perimeter: " + perimeter;
  var text_ex042 = document.getElementById("result_ex04-2");
  text_ex042.innerHTML = "Area: " + area;
}
document.getElementById("btn_ex04").onclick = rectangle;