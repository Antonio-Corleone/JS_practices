/**
 * Khối 1:
 *  Nhập số tiền dollar cần quy đổi sang vnd
 * Khối 2:
 *  B1: Khai báo hằng số const usdUnit = 23,500
 *      Tìm đến thẻ và lấy giá trị người dùng nhập được gán vào biến usd
 *  B2: Tính giá tiền quy đổi được theo công thức: vndCurrency = usd*usdUnit
 * Khối 3:
 *  Hiện số tiền vnd quy đổi được lên giao diện web
 */
function usdConvertVnd(){
  const usdUnit = 23500;
  var usd = Number(document.getElementById("usd").value);
  var vndCurrency = usd * usdUnit;
  var text_ex03 = document.getElementById("result_ex03");
  text_ex03.innerHTML = "Result: " + Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', currencyDisplay: 'narrowSymbol'}).format(vndCurrency);
}
document.getElementById("btn_ex03").onclick = usdConvertVnd;