 let menubtn = document.querySelector(".menu-btn");
 let menu = document.querySelector(".menu");
 let menuNav = document.querySelector(".menu-nav");
 let menuBranding = document.querySelector(".menu-branding");
 let navItems = document.querySelectorAll(".nav-item");
 
 let showMenu=false;


 menubtn.addEventListener('click',toggleMenu);

 function toggleMenu() {
     if (!showMenu){
         menubtn.classList.add('close');
         menu.classList.add('show');
         menuBranding.classList.add('show');
         menuNav.classList.add('show');
         navItems.forEach(item => item.classList.add('show'));
         showMenu=true;

     }else{
        menubtn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu=false;

     }

     
 }
