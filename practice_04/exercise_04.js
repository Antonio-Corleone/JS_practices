function tinhTongLuyThua(){
    var sum = 0;
    var x = Number(document.querySelector("#xNum").value);
    var n = Number(document.querySelector("#nNum").value);
    var txtEx04 = document.querySelector("#resultEx04");
    for (var i = 1; i <= n; i++){
        sum += tinhLuyThua(x, i);   
    }
    txtEx04.innerHTML = "Tổng: " + sum;
}
document.querySelector("#btn_ex04").onclick = tinhTongLuyThua;
function tinhLuyThua(param1, param2){
    var result = param1**param2;
    return result;
}
