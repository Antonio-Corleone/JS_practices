
/**
 * Khai báo giá cước tiền điền
 * 50KW đầu: kW_level1 = 500
 * 50kW kế:  kW_level2 = 650
 * 100kW kế: kW_level3 = 850
 * 150kW kế: kW_level4 = 1100
 * Còn lại:  kW_level5 = 1300
 */
const kW_level1 = 500, kW_level2 = 650, kW_level3 = 850, kW_level4 = 1100, kW_level5 = 1300;
// Khai báo tổng phí tiền điện
var total_price = 0;
function electricityCharges() {
  var name = document.getElementById("name").value;
  var kW = Number(document.getElementById("kW").value);
  var txtEx02 = document.getElementById("resultEx02");
  if (0 < kW && kW <= 50) {
    total_price = kW * kW_level1;
    txtEx02.innerHTML = "Customer name: " + name + ", " + "Charges: " + Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', currencyDisplay: 'narrowSymbol'}).format(total_price);
  }
  else if(50 < kW && kW <= 100){
    total_price = 50 * kW_level1 + (kW - 50) * kW_level2;
    txtEx02.innerHTML = "Customer name: " + name + ", " + "Charges: " + Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', currencyDisplay: 'narrowSymbol'}).format(total_price);
  }
  else if(100 < kW && kW <= 200){
    total_price = 50 * kW_level1 + 50 * kW_level2 + (kW - 100) * kW_level3;
    txtEx02.innerHTML = "Customer name: " + name + ", " + "Charges: " + Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', currencyDisplay: 'narrowSymbol'}).format(total_price);
  }
  else if(200 < kW && kW <= 350){
    total_price = 50 * kW_level1 + 50 * kW_level2 + 100 * kW_level3 + (kW - 200) * kW_level4;
    txtEx02.innerHTML = "Customer name: " + name + ", " + "Charges: " + Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', currencyDisplay: 'narrowSymbol'}).format(total_price);
  }
  else if(kW > 350){
    total_price = 50 * kW_level1 + 50 * kW_level2 + 100 * kW_level3 + 150 * kW_level4 + (kW - 350) * kW_level5;
    txtEx02.innerHTML = "Customer name: " + name + ", " + "Charges: " + Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', currencyDisplay: 'narrowSymbol'}).format(total_price);
  }
  else{
    txtEx02.innerHTML = "Invalid kW value";
  }
}
document.getElementById("btn_ex02").onclick = electricityCharges;