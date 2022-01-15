class MobileNavbar { /*criando a classe*/
    constructor(mobileMenu, navList, navLinks) { /* Toda class precisa do metodo constructor*/
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(); /* referenciando para a classe MobileNavbar através do metodo BIND*/
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                (link.style.animation = "");
                (link.style.animation = "navLinkFade 0.5s ease forwards 0.3s") 
            });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks() /*criando novo metodo para todo vez que for clicado*/
    }
    
    /* Criando um Metodo que adiciona um evento de clique no botão do menu*/
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick); /*criar novo metodo handleClik*/
    }

    /*criando um metodo para iniciar a função se moblieMenu existir*/
    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

/*criando a mobile nav bar*/
const mobileNavbar = MobileNavbar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init(); /*iniciar a nav bar*/