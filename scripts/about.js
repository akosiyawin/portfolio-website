

const About = () => {
    const mainTab = document.querySelector(".mainTab");
    const expTab = document.querySelector(".experienceTab");
    const educTab = document.querySelector(".educationTab");
    const achieveTab = document.querySelector(".achievementsTab");
    /*   const mainContent = document.querySelector(".main__content")
      const expContent = document.querySelector(".experience__content")
      const eduContent = document.querySelector(".education__content")
      const achieveContent = document.querySelector(".achievements__content") */

    mainTab.addEventListener("click", e => {
        hideExcept("main");
    });
    expTab.addEventListener("click", e => {
        hideExcept("experience");
    });
    educTab.addEventListener("click", e => {
        hideExcept("education");
    });
    achieveTab.addEventListener("click", e => {
        hideExcept("achievements");
    });

    function hideExcept(key) {
        const contents = ['main', 'experience', 'education', 'achievements'];
        contents.map(content => {

            if (key === content) {
                document.querySelector(`.${content}__content`).style.display = "block";
                document.querySelector(`.${content}Tab`).classList.add("active");
                return;
            }

            document.querySelector(`.${content}__content`).style.display = "none";
            document.querySelector(`.${content}Tab`).classList.remove("active");

        });
    }
}

export default About;