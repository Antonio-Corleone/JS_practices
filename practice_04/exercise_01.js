
document.querySelector("#btn_ex011").onclick = function () {
    var soChan = "";
    var soLe = "";
    var txtEx011 = document.getElementById("resultEx011");
    var txtEx012 = document.getElementById("resultEx012");
    //Sử dụng vòng lặp for
    for (var i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            soChan += " " + i;
        }
        else {
            soLe += " " + i;
        }

    }
    txtEx011.innerHTML = soChan;
    txtEx012.innerHTML = soLe;
}
document.querySelector("#btn_ex012").onclick = function(){
    var soChan = "";
    var soLe = "";
    var txtEx011 = document.getElementById("resultEx011");
    var txtEx012 = document.getElementById("resultEx012");
    // Sử dụng vòng lặp while
    var i = 0;
    while(i <= 100){
        if (i % 2 == 0) {
            soChan += " " + i;
        }
        else {
            soLe += " " + i;
        }
        i += 1;
    }
    txtEx011.innerHTML = soChan;
    txtEx012.innerHTML = soLe;
}

