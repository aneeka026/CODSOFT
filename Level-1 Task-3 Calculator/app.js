let inputPl = document.querySelector("#inputPl");
let btn = document.querySelectorAll("button");

let btnsArray = Array.from(btn);
let str = "";

btnsArray.forEach(btn => {
    btn.addEventListener('click' ,(e) => {

        if(e.target.innerHTML == "DEL"){
            str = str.substring(0,str.length-1); 
            inputPl.value = str;
        }
        else if(e.target.innerHTML == "AC"){
            str = "";
            inputPl.value = str;
        }
        else if(e.target.innerHTML == "="){
            str = eval(str);
            inputPl.value = str;
        }
        else{
            str += e.target.innerHTML;
            inputPl.value = str;
        }
    })
})


