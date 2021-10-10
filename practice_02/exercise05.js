/**
 * Khối 1: Nhập ngày, tháng, năm
 * Khối 2:
 *  B1: Khởi tạo các biến 
 *      var nextDay, nextMonth, nextYear;
 *      var lastDay, lastMonth, lastYear;
 *      var resetDay = 1, resetMonth = 1;
 *  B2: Tạo hàm thực hiện nextDayCalc()
 *      Tìm tới thẻ lấy giá trị ngày/ tháng/ năm nhập được gán vào: day, month, year;
 *      Kiểm tra đk của day và month (day <= 0 || month <= 0 || month > 12)
 *      true: Báo ngày hoặc tháng không tồn tại
 *      false:
 *        -Xét các tháng có 31 ngày:
 *           +Nếu day < 31 // ngày trong tháng --> nextDay = day + 1
 *           +Nếu day = 31 // ngày cuối tháng
 *               .Kiểm tra month có phải là tháng cuối năm (tháng 12) ?
 *                  true: nextDay = resetDay, nextMonth = resetMonth, nextYear = year + 1;
 *                  false: nextDay = resetDay; nextMonth = month + 1;
 *           +Nếu day > 31 true: Thông báo tháng chỉ có 31 ngày
 *        -Xét tháng 2 (Tháng đặc biệt chỉ có 28 ngày)
 *           +Nếu day < 28 // ngày trong tháng --> nextDay = day + 1
 *           +Nếu day == 28 // ngày cuối tháng --> nextDay = resetDay; nextMonth = month + 1;
 *           +Nếu day > 28 // Thông báo tháng chỉ có 28 ngày
 *        -Xét các tháng còn lại (Tháng có 30 ngày)
 *           +Nếu day < 30 // ngày trong tháng --> nextDay = day + 1
 *           +Nếu day == 30 // ngày cuối tháng --> nextDay = resetDay; nextMonth = month + 1;
 *           +Nếu day > 30 // Thông báo tháng chỉ có 30 ngày
 *  B3: Tạo hàm thực hiện previousDayCalc()
 *      Tìm tới thẻ lấy giá trị ngày/ tháng/ năm nhập được gán vào: day, month, year;
 *      Kiểm tra đk của day và month (day <= 0 || month <= 0 || month > 12)
 *      true: Báo ngày hoặc tháng không tồn tại
 *      false:
 *        -Xét các tháng có 31 ngày:
 *           +Nếu day == 1 // Ngày đầu tiên của tháng
 *               .Kiểm tra month có phải là tháng đầu tiên trong năm (tháng 1)?
 *                        lastDay = 31
 *                        lastMonth = 12
 *                        lastYear = year -1
 *               .Kiểm tra month có phải là tháng 3?
 *                        lastDay = 28
 *                        lastMonth = month - 1
 *               .Kiểm tra month có phải là tháng 8? // Vì tháng 7 có 31 ngày
 *                        lastDay = 31
 *                        lastMonth = month - 1
 *               .Các tháng có 31 ngày còn lại
 *                        lastDay = 30
 *                        lastMonth = month - 1
 *           +Nếu 1 < day <= 31 // Ngày trong tháng --> lastDay = day - 1
 *           +Nếu day > 31 --> Thông báo tháng chỉ có 31 ngày
 *         -Xét tháng 2
 *           +Nếu day == 1 // Ngày đầu tiên của tháng
 *                        lastDay = 31
 *                        lastMonth = month - 1
 *           +Nếu 1 < day <= 28 // Ngày trong tháng --> lastDay = day - 1
 *           +Nếu day > 28 --> Thông báo tháng chỉ có 28 ngày
 *         -Xét các tháng có 30 ngày
 *           +Nếu day == 1 // Ngày đầu tiên của tháng
 *                        lastDay = 31
 *                        lastMonth = month - 1
 *           +Nếu 1 < day < 30 // Ngày trong tháng --> lastDay = day - 1
 *           +Nếu day > 30 --> Thông báo tháng chỉ có 30 ngày
 * Khối 3: Hiện thị kết quả ngày mai hoăc ngày hôm qua khi nhấn button
 */

var nextDay, nextMonth, nextYear;
var lastDay, lastMonth, lastYear;
var resetDay = 1, resetMonth = 1;
var txtEx05 = document.getElementById("resultEx05");

function nextDayCalc() {
  var day = Number(document.getElementById("day").value);
  var month = Number(document.getElementById("month").value);
  var year = Number(document.getElementById("year").value);
  if (day <= 0 || month <= 0 || month > 12) {
    txtEx05.innerHTML = "Day or month does not exist !!!";
  }
  else {
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
      if (day < 31) {
        nextDay = day + 1;
        txtEx05.innerHTML = "Tomorrow is: " + nextDay + "/" + month + "/" + year;
      }
      // Check if day is the last day of the month
      else if (day == 31) {
        // check month is the last month of the year
        if (month < 12) {
          nextMonth = month + 1;
          txtEx05.innerHTML = "Tomorrow is " + resetDay + "/" + nextMonth + "/" + year;
        }
        else { //month = 12
          nextYear = year + 1;
          txtEx05.innerHTML = "Tomorrow is " + resetDay + "/" + resetMonth + "/" + nextYear;
        }
      }
      else { // day > 31
        txtEx05.innerHTML = "This month only has 31 days";
      }
    }
    else if (month == 2) {
      if (day < 28) {
        nextDay = day + 1;
        txtEx05.innerHTML = "Tomorrow is " + nextDay + "/" + month + "/" + year;
      }
      else if (day == 28) {
        nextMonth = month + 1;
        txtEx05.innerHTML = "Tomorrow is " + resetDay + "/" + nextMonth + "/" + year;
      }
      else { // day > 28
        txtEx05.innerHTML = "This month only has 28 days";
      }
    }
    else {
      if (day < 30) {
        nextDay = day + 1;
        txtEx05.innerHTML = "Tomorrow is " + nextDay + "/" + month + "/" + year;
      }
      else if (day == 30) {
        nextMonth = month + 1;
        txtEx05.innerHTML = "Tomorrow is " + resetDay + "/" + nextMonth + "/" + year;
      }
      else {// day > 30
        txtEx05.innerHTML = "This month only has 30 days";
      }
    }
  }
}
function previousDayCalc() {
  var day = Number(document.getElementById("day").value);
  var month = Number(document.getElementById("month").value);
  var year = Number(document.getElementById("year").value);
  if (day <= 0 || month <= 0 || month > 12) {
    txtEx05.innerHTML = "Day or month does not exist !!!";
  }
  else {
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
      // Check if day is the first day of the month
      if (day == 1) {
        // Check if month is the fist month of the year
        if (month == 1) {
          lastDay = 31;
          lastMonth = 12;
          lastYear = year - 1;
          txtEx05.innerHTML = "Yesterday is: " + lastDay + "/" + lastMonth + "/" + lastYear;
        }
        else if (month == 3) {
          lastDay = 28;
          lastMonth = month - 1;
          txtEx05.innerHTML = "Yesterday is: " + lastDay + "/" + lastMonth + "/" + year;
        }
        else if (month == 8){
          lastDay = 31;
          lastMonth = month - 1;
          txtEx05.innerHTML = "Yesterday is: " + lastDay + "/" + lastMonth + "/" + year;
        }
        else {
          lastDay = 30;
          lastMonth = month - 1;
          txtEx05.innerHTML = "Yesterday is: " + lastDay + "/" + lastMonth + "/" + year;
        }
      }
      else if (1 < day && day <= 31) {
        lastDay = day - 1;
        txtEx05.innerHTML = "Yesterday is: " + lastDay + "/" + month + "/" + year;
      }
      else {// day > 31
        txtEx05.innerHTML = "This month only has 31 days";
      }
    }
    else if (month == 2) {
      // Check if day is the first day of the month
      if (day == 1) {
        lastDay = 31;
        lastMonth = month - 1;
        txtEx05.innerHTML = "Yesterday is: " + lastDay + "/" + lastMonth + "/" + year;
      }
      else if (1 < day && day <= 28) {
        lastDay = day - 1;
        txtEx05.innerHTML = "Yesterday is: " + lastDay + "/" + month + "/" + year;
      }
      else {// day > 28
        console.log("This month only has 28 days")
        txtEx05.innerHTML = "This month only has 28 days";
      }
    }
    else {
      // Check if day is the first day of the month
      if (day == 1) {
        lastDay = 31;
        lastMonth = month - 1;
        txtEx05.innerHTML = "Yesterday is: " + lastDay + "/" + lastMonth + "/" + year;
      }
      else if(1 < day && day <= 30){
        lastDay = day - 1;
        txtEx05.innerHTML = "Yesterday is: " + lastDay + "/" + month + "/" + year;
      }
      else{// day > 30
        txtEx05.innerHTML = "This month only has 30 days";
      }
    }
  }
}

document.getElementById("btn_ex051").onclick = previousDayCalc;
document.getElementById("btn_ex052").onclick = nextDayCalc;