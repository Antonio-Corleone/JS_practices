// Nhà dân
const phiHoaDon = 4.5;
const phiDvCoBan = 20.5;
const phiThueKenh = 7.5;
// Doanh nghiêp
const phiHoaDon_Dn = 15;
const phiDvCoBan_Dn = 75;
const phiThueKenh_Dn = 50;

function Ketqua() {
  // Lấy giá trị từ giao diện
  var loai_KH = document.querySelector("#loai-KH").value;
  var ma_KH = document.querySelector("#ma-KH").value;
  var kenh_DK = Number(document.querySelector("#kenh-dk").value);
  var txtEx04 = document.getElementById("resultEx04");
  // Kiểm tra kênh DK > 0
  if (kenh_DK < 0) {
    txtEx04.innerHTML = "Số kênh đăng ký không hợp lệ"
  }
  else {
    txtEx04.innerHTML = "Mã khách hàng: " + ma_KH + "; Tiền cáp: " + tinhTienCap(loai_KH, kenh_DK);
  }

}
document.getElementById("btn_ex04").onclick = Ketqua;

// Hàm tính tiền cáp theo loại khách hàng
// param1: loại KH; param2: Số lượng kênh đăng ký
function tinhTienCap(param1, param2) {
  var total = 0;
  if (param1 == "doanh-nghiep") {
    var soKetNoi = Number(document.querySelector("#so-ketnoi").value);
    if (soKetNoi > 10) {
      total = phiHoaDon_Dn + phiDvCoBan_Dn + param2 * 50 + (soKetNoi - 10) * 5;
    }
    else {
      total = phiHoaDon_Dn + phiDvCoBan_Dn + param2 * 50;
    }
  }
  else if(param1 == "nha-dan"){
    total = phiHoaDon + phiDvCoBan + param2 * 7.5;
  }
  else {
    total = 0;
  }
  return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(total);
}


// Hàm hiện ô nhập Số kết nối khi chon loại KH là doanh nghiêp
function myFunction() {
  var chosen = document.querySelector("#loai-KH").value;
  if (chosen == "doanh-nghiep") {
    document.querySelector("#visible").className = "col-6 form-group";
  }
  else {
    document.querySelector("#visible").className = "d-none";
  }
}