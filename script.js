const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


const cards = document.querySelectorAll(
".video-card,.project-card"
);

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform =
        "translateY(-12px) scale(1.04)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "translateY(0) scale(1)";

    });

});


window.addEventListener("scroll",()=>{

    document.querySelectorAll(
    ".video-card,.project-card"
    ).forEach(card=>{

        const position =
        card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform =
            "translateY(0)";
        }

    });

});