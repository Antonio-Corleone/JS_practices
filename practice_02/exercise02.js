/**
 * Khối 1:
 *  Chọn thành viên muốn gửi tới lời xin chào
 * Khối 2:
 *  B1: Tìm tới thẻ select và lấy giá trị của thẻ option được chọn
 *      var selection = document.getElementById("selection").value;
 *  B2: Tùy vào giá trị mà người dùng chon được lưu vào biến selection 
 *  xuất ra lời chào tới thành viên tương ứng
 *        switch (selection) {
            case "dad":
              txtEx02.innerHTML = "Hello Daddy !";
              break;
            case "mom":
              txtEx02.innerHTML = "Hello Mommy !";
              break;
            case "bro":
              txtEx02.innerHTML = "Hello Brother !";
              break;
            case "sis":
              txtEx02.innerHTML = "Hello Sister !";
              break;
          }
 * Khối 3:
 *  Xuất lời chào tới thành viên được chon lên giao diện web
 */



function sayHello() {
  var selection = document.getElementById("selection").value;
  var txtEx02 = document.getElementById("resultEx02");
  switch (selection) {
    case "dad":
      txtEx02.innerHTML = "Hello Daddy !";
      break;
    case "mom":
      txtEx02.innerHTML = "Hello Mommy !";
      break;
    case "bro":
      txtEx02.innerHTML = "Hello Brother !";
      break;
    case "sis":
      txtEx02.innerHTML = "Hello Sister !";
      break;
  }
  // console.log(selection);
}
document.getElementById("btn_ex02").onclick = sayHello;