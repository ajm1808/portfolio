const menu=document.querySelector(".menu-toggle-btn");
const table= document.querySelector(".tablemenubar");

menu.addEventListener("click",()=>{
    if(table.style.display=="none"){
        table.style.display="block";
        menu.textContent="show"
    }
    else {
        image.style.display="none";
        button.textContent="show"
    }
})

const aboutBTN=document.querySelector(".about-btn");
const modalBg=document.querySelector(".modal-bg");
const modClose=document.querySelector(".modal-close");

aboutBTN.addEventListener("click",()=>{
    modalBg.classList.add("bg-active");
})

modClose.addEventListener("click",()=>{
    modalBg.classList.remove("bg-active");
})

const projects=document.querySelectorAll(".project");

function toggleOpen(){
    this.classList.toggle("open");
}

function toggleActive(e){
    console.log(e.propertyName);
    if(e.propertyName.includes("flex")){
    this.classList.toggle("open-active");}
}
    
projects.forEach(project=>project.addEventListener("click",toggleOpen));//equivalent of a loop,adding event listener to each item in projects and adding 'open' to class name when clicked (activating css)
projects.forEach(project=>project.addEventListener("transitionend",toggleActive));//as above but looks for the end of the last transition - flex in this case- to then add openactive

 
