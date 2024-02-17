const NavButtonSelector = (id) => {
    const aboutButton = document.getElementById("about-button")
    const projectsButton = document.getElementById("projects-button")
    const contactButton = document.getElementById("contact-button")

    if(aboutButton && projectsButton && contactButton){
        aboutButton.style.color = "#FFFCEA"
        projectsButton.style.color = "#FFFCEA"
        contactButton.style.color = "#FFFCEA"

        if(id !== "reset"){
            const activeButton = document.getElementById(id)
            if(activeButton){
                activeButton.style.color = "springgreen"
            }else{
                console.error(id + " id not found in DOM")
            }
        }
    }
}

export default NavButtonSelector