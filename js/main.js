import Team from "./modules/DataObject.js";

(() => {

    
        const button         =      document.querySelector("#button"),
              burgerCon      =      document.querySelector("#burgerCon"),
              teamButton     =      document.querySelectorAll(".teamButton"),
              bioInfo        =      document.querySelector(".bio-wrapper").children;
              
    
    
        function hamburgerMenu() {
            burgerCon.classList.toggle("slideToggle");
            button.classList.toggle("expanded");
        }
    
        function closeMenu() {
    
            if (window.matchMedia("(min-width: 1024px)").matches && burgerCon.classList.contains('slideToggle') ) {
            console.log("media query fired");
            burgerCon.classList.remove('slideToggle');
            button.classList.remove('expanded');
            }
        }
        
       function teamData (){
          console.log(this.textContent);
    
           let teamMember = this.textContent;

           bioInfo[0].textContent = Team[teamMember].name;
        } 
        
        
    
        teamButton.forEach(button => button.addEventListener('click', teamData));
        button.addEventListener("click", hamburgerMenu, false);
        window.addEventListener("resize", closeMenu);
        
    })();
    