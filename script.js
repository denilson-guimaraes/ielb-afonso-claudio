// Social Media - Link
function socialMediaLink(e){
   console.log()
   for (let className of e.classList) {
      switch(className){
         case 'facebook': window.open('https://www.facebook.com/IELBAfonsoclaudio') 
         break;

         case 'instagram': window.open('http://www.instagram.com/ielb_afonsoclaudio') 
         break;

         case 'youtube': window.open('https://www.youtube.com/channel/UCmlsg2cZoArkB_p_iAdeC8Q') 
         break;
         
         default: 
         break;
      }
   }
}

// Animação - Elementos da página
function animeScroll(){
   const target = document.querySelectorAll("[data-anime]");
   const animationClass = "animate";
   const windowTop = window.pageYOffset;

   target.forEach(function(element){
      if((windowTop) > element.offsetTop + window.innerHeight * -4 / 4.5){
         element.classList.add(animationClass)
      }else{
         element.classList.remove(animationClass)
      }

   })

}
animeScroll();

// Navbar - Animação
function headerAnime(){
   var img = document.querySelector(".navbar .navbar-brand img")

   img.classList.toggle("img-anime", window.scrollY > 0)
}

// Ouvinte de Eventos
window.addEventListener("scroll", function() {
   animeScroll();
   headerAnime()
})
