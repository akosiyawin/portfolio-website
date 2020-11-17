

const Nav = () =>{
    const hamburger = document.querySelector(".hamburger__icon");
    const navlinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click",e=>{
        navlinks.classList.toggle("open")
        links.forEach(link=>{
            link.classList.toggle("fade");
        })
    });

    document.addEventListener("scroll",e=>{
        if(scrollY !== 0 && !nav.classList.contains("scrolled"))
            nav.classList.add("scrolled")
        if(scrollY === 0 && nav.classList.contains("scrolled"))
            nav.classList.remove("scrolled")
    });
}

export default Nav;