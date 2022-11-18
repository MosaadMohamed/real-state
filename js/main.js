let nums = document.querySelectorAll(".home_value .number");
let started = false;


function scrollHeader(){

    let header= document.getElementById("header");

    if(this.scrollY >= 50 )
    {
        header.classList.add("scroll-header");

        if(started !== true)
        {
            nums.forEach((num)=>{

                startCount(num);
            });
        }          
        started = true;
    } else{
        header.classList.remove("scroll-header");
    }
}

window.addEventListener("scroll" , scrollHeader );

function startCount(el)
{
    let goal = el.dataset.goal;

    let count = setInterval(()=>{

        el.textContent++;

        if( el.textContent === goal)
        {
            clearInterval(count);
        }

    },3000 / goal);
}

let acccordingItems  = document.querySelectorAll(".value-according-item")

acccordingItems.forEach((item)=>{

    let accordingHeader = item.querySelector("header");

    accordingHeader.addEventListener("click", ()=>{
        
        let open = document.querySelector(".according-open");

        toggleItem(item);
        if(open && open !== item)
        {
            toggleItem(open);
        }
    });
});



let toggleItem = (item) =>{

    let accordingContent = item.querySelector(".value-according-content");

    if(item.classList.contains("according-open"))
    {
        accordingContent.removeAttribute("style");

        item.classList.remove("according-open");
    } else{

        accordingContent.style.height = "120px";

        item.classList.add("according-open");
    }

}

let sections = document.querySelectorAll("section[id]");
let span = document.querySelector(".up");

function scrollActive(){

    let scrollY = window.pageYOffset;

    sections.forEach((section)=>{

        let sectionHeight = section.offsetHeight;

        let sectionTop = section.offsetTop - 58;

        let sectionId = section.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector(`.nav_menu a[href*=${sectionId}]`).classList.add("active-link");

        } else{

            document.querySelector(`.nav_menu a[href*=${sectionId}]`).classList.remove("active-link");

        }

    });

if(this.scrollY >=1000)
{
    span.classList.add("show");
} else{
    span.classList.remove("show")
}
}

window.addEventListener("scroll" , scrollActive);


span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    };

    let themeToggler = document.querySelector('#theme-toggler');
    
    themeToggler.onclick = () =>{
    
        themeToggler.classList.toggle('fa-sun');
    
        if(themeToggler.classList.contains('fa-sun')){
            
            document.querySelector('body').classList.add("active");

            window.localStorage.setItem("theme" , "active");
        }else{
            
            document.querySelector('body').classList.remove("active");
            window.localStorage.setItem("theme", null);
        }
    }

    