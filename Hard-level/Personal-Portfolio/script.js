const text = [
    "Frontend Developer",
    "React Developer",
    "MERN Stack Developer",
    "Problem Solver"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = text[textIndex];

    if(!isDeleting){
        typing.textContent = current.substring(0,charIndex++);
    }else{
        typing.textContent = current.substring(0,charIndex--);
    }

    let speed = 120;

    if(!isDeleting && charIndex === current.length + 1){
        isDeleting = true;
        speed = 1500;
    }

    if(isDeleting && charIndex === 0){
        isDeleting = false;
        textIndex = (textIndex + 1) % text.length;
    }

    setTimeout(typeEffect,speed);
}

typeEffect();

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});