import Team from "./modules/DataObject.js";

(() => {

        const button         =      document.querySelector("#button"),
              burgerCon      =      document.querySelector("#burgerCon"),
              teamButton     =      document.querySelectorAll(".teamButton"),
              lbCLose        =      document.querySelectorAll(".lightbox-close");
              
              
       
    
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

      function openLightbox(e){
            
             let currentLightbox = e.target.previousElementSibling;

             console.log(currentLightbox);

              currentLightbox.classList.add("lightbox-on");
      }

      function closeLightbox(e){
       console.log(e.target);
       let currentLightbox = e.target.parentElement;

       currentLightbox.classList.remove("lightbox-on");
       // e.target.classList.remove("lightbox-on");

      }
        
       function teamData (e){
    
           let teamMember = this.textContent;

           let bioInfo  =  e.target.previousElementSibling.children;

           bioInfo[1].textContent = Team[teamMember].name;
           bioInfo[2].textContent = Team[teamMember].role;
           bioInfo[3].textContent = Team[teamMember].bio;

        } 
        
        lbCLose.forEach(lighbox => lighbox.addEventListener ('click', closeLightbox));
        teamButton.forEach(button => button.addEventListener('click', teamData));
        teamButton.forEach(button => button.addEventListener('click',openLightbox));
        button.addEventListener("click", hamburgerMenu, false);
        window.addEventListener("resize", closeMenu);
        
    })();
    