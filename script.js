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

