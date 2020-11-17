document.addEventListener("DOMContentLoaded", e => {
    Swal.fire(
        'Hello Visitor!',
        'This is a Work in Progress. Feel free to look around, But keep in mind that, the portfolio section is not currently updated. Check out my Github profile instead.',
        'info'
    )
});

// import Builder from "./scripts/builder.js";
import Nav from "./scripts/nav.js";
import About from "./scripts/about.js";
import Contact from "./scripts/contact.js";

// Builder();
Nav();
About();
Contact();


