document.addEventListener("DOMContentLoaded", ()=>{
    "use strict";
    const menuItems = document.querySelectorAll(".tabheader__item");
    const tabs = document.querySelector(".tabheader__items");
    const tabcontent = document.querySelectorAll('.tabcontent');
   
    function hideTabContent(){
        tabcontent.forEach(item =>{
         item.style.display = "none";
        });

        menuItems.forEach(item => {
            item.classList.remove("tabheader__item_active");   
        });
    }

    function showtab(i = 0){
        tabcontent[i].style.display = "block";
        menuItems[i].classList.add("tabheader__item_active");
    }
  
    tabs.addEventListener('click', (event)=>{
        if(event.target && event.target.classList.contains("tabheader__item")){
            console.log(`event.target имеют класс ${event.target.classList.contains("tabheader__item")}`);
            menuItems.forEach((item, i)=>{
                if(event.target == item){
                    console.log(item );
                    hideTabContent();
                    showtab(i); 
                }
            });
        }else{

        }
    });
    hideTabContent();
    showtab(); 
console.log(menuItems);
});
