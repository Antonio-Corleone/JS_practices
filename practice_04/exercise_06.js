var content = "";
var txtEx06 = document.querySelector("#resultEx06");

document.getElementById("btn_ex06").onclick = function(){
    for(var i = 1; i <= 10; i++){
        if (i%2 == 0){
            content += '<div class ="text-center text-white my-3" style="background-color: red; height: 40px; width: 100%;">' + 'Div chẵn' + '</div>'
        }
        else{
            content += '<div class ="text-center text-white my-3" style="background-color: blue; height: 40px; width: 100%;">' + 'Div lẻ' + '</div>'
        }
    }
    txtEx06.innerHTML = content;
}