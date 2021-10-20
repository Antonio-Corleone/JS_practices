document.querySelector("#btn_ex03").onclick = function(){
    sum = 0;
    var txtEx03 = document.querySelector("#resultEx03");
    for (var i = 1; sum < 10000; i++){
        sum += i;
        var n = i;
    }
    txtEx03.innerHTML = "Số nguyên dương nhỏ nhất: " + n;
}