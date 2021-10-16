// Khai báo điểm khu vực area_A, area_B và area_C
const area_A = 2,
  area_B = 1,
  area_C = 0.5;
// Khai báo điểm ưu tiên
const priority_1 = 2.5,
  priority_2 = 1.5,
  priority_3 = 1;
//  Khai báo điểm tổng kết và tổng điểm ưu tiên totalPoint, totalBonus
var totalPoint = 0, totalBonus = 0;

function examPassCalc() {
  // Lấy giá trị từ người dùng nhập trên giao diện
  var sub1 = Number(document.getElementById("sub1").value);
  var sub2 = Number(document.getElementById("sub2").value);
  var sub3 = Number(document.getElementById("sub3").value);
  var area = document.getElementById("area").value;
  var priority = document.getElementById("priority").value;
  var passPoint = Number(document.getElementById("passPoint").value);
  var txtEx01 = document.getElementById("resultEx01");
  // Tính tổng điểm
  totalPoint = sub1 + sub2 + sub3 + priorityPointCalc(area, priority);
  // So sánh với điểm chuẩn và hiện kết quả lên giao diện
  if(sub1 <= 0 || sub2 <= 0 || sub3 <= 0){
    txtEx01.innerHTML = "Rớt !!!" +"<br>" + "Vì lý do có môn bị điểm 0";
  }
  else{
    if(totalPoint >= passPoint){
      txtEx01.innerHTML = "Đậu !!!" + "<br>" + "Tổng điểm: " + totalPoint;
    }
    else{
      txtEx01.innerHTML = "Rớt !!!" + "<br>" + "Tổng điểm: " + totalPoint;
    }
  }
}

document.getElementById("btn_ex01").onclick = examPassCalc;

// Khai báo hàm kiểm tra đối tương ưu tiên
function priorityPointCalc(param1, param2) {
  var areaPoint = 0, priorityPoint = 0;
  // Kiểm tra khu vực ưu tiên
  switch (param1) {
    case "X":
      break;
    case "A":
      areaPoint = area_A;
      break;
    case "B":
      areaPoint = area_B;
      break;
    case "C":
      areaPoint = area_C;
      break;
  }
  // Kiểm tra đối tượng ưu tiên
  switch (param2) {
    case "0":
      break;
    case "1":
      priorityPoint = priority_1;
      break;
    case "2":
      priorityPoint = priority_2;
      break;
    case "3":
      priorityPoint = priority_3;
      break;
  }
  totalBonus = areaPoint + priorityPoint;
  return totalBonus;
}