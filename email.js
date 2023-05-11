let inputEmail = document.getElementById("email-id");
let icone = document.querySelector(".icone");
let textError = document.querySelector(".error");

let matRegex = /^[a-zA-Z][a-zA-Z0-9\-\-\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}/
textError.style.display = 'none';
function checkration(){
    if(inputEmail.value.match(matRegex)){
        icone.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check" id="check-true"></i>`;
        inputEmail.style.border = `2px solid #009900`;
        textError.style.display = 'none';

    }else if(inputEmail.value == ""){
        icone.style.display = 'none';
        // textError.style.display = `none`;

    }else{
        icone.innerHTML = `<i class="fa-solid fa-circle-exclamation" id="check-false"></i>`;
        textError.style.display = 'block';
        inputEmail.style.border = '2px solid #e00';

    }
}























