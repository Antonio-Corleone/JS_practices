var txtEx02 = document.getElementById("resultEx02");
document.querySelector("#btn_ex021").onclick = function () {
    var count = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            count += 1;
        }
    }
    txtEx02.innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + "số";
}
document.querySelector("#btn_ex022").onclick = function () {
    var count = 0;
    var i = 0;
    while (i < 1000) {
        if (i % 3 == 0) {
            count += 1;
        }
        i += 1;
    }
    txtEx02.innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + "số";
}