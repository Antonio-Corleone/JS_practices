// Khai báo số tiền/ người phụ thuộc
const phuThuoc = 1600000;
// Khai báo hiệu suất chịu thuế
const hs_60 = 0.05,
  hs_60_120 = 0.1,
  hs_120_210 = 0.15,
  hs_210_384 = 0.2,
  hs_384_624 = 0.25,
  hs_624_960 = 0.3,
  hs_upTo_960 = 0.35;
var txtEx03 = document.getElementById("resultEx03");
function tinhThue() {
  // Lấy giá trị từ người nhập trên giao diện
  var fullName = document.getElementById("fullname").value;
  var tongThuNhap = Number(document.getElementById("thuNhap").value);
  var soNguoi = Number(document.getElementById("songuoi").value);

  // Xây dựng công thức tính, tạo biến ketQua để xuất lên giao diện
  var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoi * phuThuoc;
  var ketQua = 0;

  // Kiểm tra điều kiện giá trị thuNhapChiuThue
  if (thuNhapChiuThue <= 0){
    txtEx03.innerHTML = "Số thu nhập không hợp lệ.";
  }
  else{
    ketQua = tinhThueSuat(thuNhapChiuThue);
    txtEx03.innerHTML = "Họ tên: " + fullName + '<br>' + "Tiền thuế thu nhập cá nhân: " + Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', currencyDisplay: 'narrowSymbol'}).format(ketQua);
  }
}

document.getElementById("btn_ex03").onclick = tinhThue;

function tinhThueSuat(param1) {
  var thuNhapSauThue = 0;
  if (param1 <= 60000000) {
    thuNhapSauThue = param1 * hs_60;
  }
  else if (60000000 < param1 && param1 <= 120000000) {
    thuNhapSauThue = 60000000 * hs_60 + (param1 - 60000000) * hs_60_120;
  }
  else if (120000000 < param1 && param1 <= 210000000) {
    thuNhapSauThue = 60000000 * hs_60 + 60000000 * hs_60_120 + (param1 - 120000000) * hs_120_210;
  }
  else if (210000000 < param1 && param1 <= 384000000) {
    thuNhapSauThue = 60000000 * hs_60 + 60000000 * hs_60_120 + 90000000 * hs_120_210 + (param1 - 210000000) * hs_210_384;
  }
  else if (384000000 < param1 && param1 <= 624000000) {
    thuNhapSauThue = 60000000 * hs_60 + 60000000 * hs_60_120 + 90000000 * hs_120_210 + 174000000 * hs_210_384 + (param1 - 384000000) * hs_384_624;
  }
  else if (624000000 < param1 && param1 <= 960000000) {
    thuNhapSauThue = 60000000 * hs_60 + 60000000 * hs_60_120 + 90000000 * hs_120_210 + 174000000 * hs_210_384 + 240000000 * hs_384_624 + (param1 - 624000000) * hs_624_960;
  }
  else{
    thuNhapSauThue = 60000000 * hs_60 + 60000000 * hs_60_120 + 90000000 * hs_120_210 + 174000000 * hs_210_384 + 240000000 * hs_384_624 + 336000000 * hs_624_960 + (param1 - 960000000) * hs_upTo_960;
  }
  return thuNhapSauThue;
}
