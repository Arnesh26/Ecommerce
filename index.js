var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight="0px";
function menutoggle() {
    if(MenuItems.style.maxHeight=="0px"){
        MenuItems.style.maxHeight="200px";
    }else{
        MenuItems.style.maxHeight="0px";
    }
}

// ------  js for product gallery--------

var productImg = document.querySelector('#productImg');
var smallImg = document.querySelectorAll('.small-img');
smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src;
}

// --------------for toggle form---------

LoginForm = document.getElementById("LoginForm");
RegForm = document.getElementById("RegForm");
Indicator = document.getElementById("Indicator");

function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}