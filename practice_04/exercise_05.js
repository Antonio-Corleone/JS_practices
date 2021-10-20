function tinhGiaiThua(){
    var n = Number(document.querySelector("#num").value);
    var result = 1;
    var txtEx05 = document.querySelector("#resultEx05");
    if (n < 0){
        txtEx05.innerHTML = "Số n không hợp lệ !"
    }
    else if (n == 0 || n == 1){
        txtEx05.innerHTML = n + "!= " + 1;
    }
    else{
        for (var i = 1; i <= n; i++){
            result *= i;
        }
        txtEx05.innerHTML = n + "!= " + result;
    }
}
document.querySelector("#btn_ex05").onclick = tinhGiaiThua;
