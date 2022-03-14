function calculo(btn) {
    let btnIn = btn.id
    if (btnIn == "btn-f"){
        valor = document.getElementById("fconvert").value;
        document.getElementById("cconvert").value = (valor - 32) / 1.8;
        document.getElementById("kconvert").value = ((valor - 32) / 1.8)+273.15;
        document.getElementById("rconvert").value = valor + 459.67;
    }else if (btnIn == "btn-c"){
        valor = document.getElementById("cconvert").value;
        document.getElementById("fconvert").value = (valor *1.8)+32;
        document.getElementById("kconvert").value = valor+273.15;
        document.getElementById("rconvert").value = (valor *1.8)+491.67;
    }else if(btnIn == "btn-k"){
        valor = document.getElementById("kconvert").value;
        document.getElementById("cconvert").value = valor - 273.15;
        document.getElementById("fconvert").value = ((valor-273.15)/1.8)+32;
        document.getElementById("rconvert").value = ((valor-273.15)/1.8)+491.67;
    }
    else if(btnIn == "btn-r"){
        valor = document.getElementById("rconvert").value;
        document.getElementById("cconvert").value = (valor-491.67)/1.8;
        document.getElementById("fconvert").value = valor-459.67;
        document.getElementById("kconvert").value = ((valor-491.67)/1.8)+273.15;
    }

}
function limpar(){
    document.getElementById("kconvert").value=" ";
    document.getElementById("cconvert").value=" ";
    document.getElementById("rconvert").value=" ";
    document.getElementById("fconvert").value=" ";
}

/*
R para C - (R-491.67)/1.8
R para F - R-459.67
R para K - ((R-491.67)/1.8)+273.15

C para F - (C*1.8)+32
C para K - C+273.15
C para R - (C*1.8)+491.67

F para C - (F-32)/1.8
F para K - ((F-32)/1.8)+273.15
F para R - F+459.67

K para C - K-273.15
K para F - ((K-273.15)/1.8)+32
K para R - ((K-273.15)*1.8)+491.67

*/

// btns.forEach((btn) => {
//     btn.onclick = () => {
//         console.log("cu")
//         let btnIn = this.getAttribute("id")
// if (btnIn == "btn-f"){
//     valor = document.getElementById("fconvert").value;
//     document.getElementById("cconvert") = (valor - 32) / 1.8;
// }else if (btnIn == "btn-c"){
// }else if(btnIn == "btn-k"){
// }
// else if(btnIn == "btn-r"){
// }
// else{
// }
//     }
// })
