const navbar = document.querySelector(".container_navbar"); //const variable for the nav bar
botonmenu = document.querySelector(".bars__menu"); //variable for the menu button on responsive mode

//onclick function for the responsive menu button display the navbar
botonmenu.addEventListener("click", (e)=>{
    e.preventDefault();
    navbar.classList.toggle('active');
})

//function of the animation for the responsive menu button to work
document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

//function that will change the bars classlist for its animation to work
function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}

//declaring consts for the contact form and the blurry background that will be displayed when the form is active
const form = document.querySelector("#sidebar");
const bbg = document.querySelector(".blurbackground");
const btnCloseForm = document.querySelector("#btncloseform");
const BTNcontact = document.querySelector("#contactme");
const btnHire = document.querySelector("#btnHire");
const btnService = document.querySelector("#btnHireService");
//declaring the function
function slideform(button){
    button.addEventListener("click", (e)=>{
    e.preventDefault();
    form.classList.toggle("active");
    bbg.classList.toggle("active");
})
}
slideform(btnCloseForm);
slideform(BTNcontact);
slideform(btnHire)
slideform(btnService)
//function for the dark mode switch
var colorSwitch = document.querySelector('#switch');
let $checkbox = document.querySelector(".checkbox");
function cambiaTema(e) {
    if(e.target.checked){
        document.documentElement.setAttribute('tema','dark');
        localStorage.setItem("tema","dark");
    }else {
        document.documentElement.setAttribute('tema','light');
        localStorage.setItem("tema","light");
        
    }
}
document.addEventListener("DOMContentLoaded", e=>{
if(localStorage.getItem("tema")==="light"){
    document.documentElement.setAttribute('tema','light');
    $checkbox.checked = false;
}

if(localStorage.getItem("tema")==="dark"){
    document.documentElement.setAttribute('tema','dark');
    $checkbox.checked = true;
   
}

colorSwitch.addEventListener('change',cambiaTema); 
});
//------------------------------------------------

//slide pages up with the navbar function
const pages = document.querySelectorAll("#PAGE_CONTAINER");
const btnAboutMe = document.querySelector("#aboutme");
const btnExperience = document.querySelector("#experience")
const btnSkills = document.querySelector("#skills");
const btnServices = document.querySelector("#services");
const btnPortfolio = document.querySelector("#portfolio");
const btnPortfolio1 = document.querySelector("#portfolio1")

function slidePageUp(btn,page){
    btn.addEventListener("click", (e)=>{
        e.preventDefault();
        pages.forEach(item => {
            item.classList.remove("active");
        });
        page.classList.toggle("active");
    })
}
slidePageUp(btnExperience,pages[1]);
slidePageUp(btnAboutMe,pages[0]);
slidePageUp(btnSkills,pages[2]);
slidePageUp(btnServices,pages[3]);
slidePageUp(btnPortfolio,pages[4]);
slidePageUp(btnPortfolio1, pages[4]);
