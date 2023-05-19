// get elements
let btnToggleNavbar = document.querySelector("#btn-navbar");
let navbar = document.querySelector(".navbar");
btnToggleNavbar.addEventListener("click", (event)=>{
    let btn = event.target;
    let ariaExpanded = btnToggleNavbar.getAttribute("aria-expanded");
    if (ariaExpanded === "true") {
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("data-icon", "open");
        navbar.setAttribute("data-visible", "false");
        document.body.setAttribute("data-background", "bright");
    } else {
        btn.setAttribute("aria-expanded", "true");
        btn.setAttribute("data-icon", "close");
        navbar.setAttribute("data-visible", "true");
        document.body.setAttribute("data-background", "dark");
    }
});

//# sourceMappingURL=index.aa69868b.js.map
