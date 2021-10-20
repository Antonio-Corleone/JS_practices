function timSoNguyenTo() {
    var num = Number(document.querySelector("#myNumber").value);
    var txtEx07 = document.querySelector("#resultEx07");
    var myList = "";
    if (num >= 2) {
        // Lấy giá trị số i chạy từ 2 đến num
        for (var i = 2; i <= num; i++) {
            var count = 0;
            // Kiểm tra số điều kiện số nguyên tố
            for (var j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) {
                    count += 1;
                }
            }
            /**
             * count = 0, nghĩa là i không có ước trong khoảng:
             * từ 2 đếm sqrt(i)
             */
            if (count == 0) {
                myList += " " + i;
            }
        }
    }
    txtEx07.innerHTML = myList;
}
document.querySelector("#btn_ex07").onclick = timSoNguyenTo;