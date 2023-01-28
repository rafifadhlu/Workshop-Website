let ham = document.querySelector('#hamburger-icon1');
let navbar = document.querySelector('.inactive-nav');



ham.addEventListener("click", function(){
    if(navbar.classList.contains("active-nav")){
        navbar.classList.add("inactive-nav");
        navbar.classList.remove("active-nav");
    }else{
        navbar.classList.add("active-nav");
        navbar.classList.remove("inactive-nav");
    }
});
