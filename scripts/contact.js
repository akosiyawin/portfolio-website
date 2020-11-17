
const Contact = () => {
    const form = document.querySelector(".message__me");

    form.addEventListener("submit", e => {
        e.preventDefault();
        const name = document.querySelector(".contactName").value;
        const email = document.querySelector(".contactEmail").value;
        const subject = document.querySelector(".contactSubject").value;
        const message = document.querySelector(".contactMessage").value;

        window.open(`mailto:akosiyawin.business@gmail.com?subject=${subject}&body= I am ${name} <${email}>, ${message}`);
    });

}

export default Contact;