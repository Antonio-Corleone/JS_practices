/**
 * Khối 1: Nhập chiều dài 3 cạnh của tam giá bất kỳ
 * Khối 2:
 *  B1: Tìm tới thẻ và lấy giá trị được nhập gán vào 3 biến edge1, edge2, edge3
 *  B2: Ép kiểu number
 *  B3: if Kiểm tra nếu tam giác đều: có 3 cạnh đều bằng nhau
 *         Kiểm tra nếu tam giá cân: có 2 cạnh bằng nhau   
 *         Kiểm tra điều kiện tam giác vuông: pow(edge3) = pow(edge1) + pow(edge2) || pow(edge1) = pow(edge2) + pow(edge3) || pow(edge2) = pow(edge1) + pow(edge3)
 *         Trường hợp còn lại xuất kết quả là: Tam giác thường
 * Khối 3: Xuất ra kết quả thông báo loại tam giác là vuông/ cân/ đều/ tam giác thường
 */
function triangleType() {
  var edge1 = Number(document.getElementById("edge1").value);
  var edge2 = Number(document.getElementById("edge2").value);
  var edge3 = Number(document.getElementById("edge3").value);
  var txtEx04 = document.getElementById("resultEx04");
  var temp = 0;
  // Check edge must be greater than 0
  if (edge1 < 0 || edge2 < 0 || edge3 < 0) {
    txtEx04.innerHTML = "Edge can't be negative !!!";
  }
  else {
    // Check triangle condition
    if (edge1 + edge2 <= edge3 || edge1 + edge3 <= edge2 || edge2 + edge3 <= edge1){
      txtEx04.innerHTML = "This is not a triangle";
    }
    else{
      if (edge1 == edge2 && edge1 == edge3) {
        txtEx04.innerHTML = "This an equilateral triangle";
      }
      else if (edge1 == edge2 || edge2 == edge3 || edge1 == edge3) {
        txtEx04.innerHTML = "This a Isosceles triangle";
      }
      else if (Math.pow(edge1, 2) == Math.pow(edge2, 2) + Math.pow(edge3, 2) || Math.pow(edge2, 2) == Math.pow(edge1, 2) + Math.pow(edge3, 2) || Math.pow(edge3, 2) == Math.pow(edge1, 2) + Math.pow(edge2, 2)) {
        txtEx04.innerHTML = "This a right triangle ";
      }
      else {
        txtEx04.innerHTML = "This a Scalene triangle";
      }
    }
  }
}
document.getElementById("btn_ex04").onclick = triangleType;