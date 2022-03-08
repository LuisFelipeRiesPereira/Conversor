let btns = document.querySelectorAll(".btn-temp-convert")
btns.forEach((btn) => {
    btn.onclick = () => {
        let btnIn = this.getAttribute("id")
        if (btnIn == "btn-f"){
            fconvert = (fconvert.value - 32) * (5/9);
        }else if (btnIn == "btn-c"){

        }else{

        }
    }
})