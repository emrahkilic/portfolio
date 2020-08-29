
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
    });

//////

// Select the elements we want to show or hide
var burger = document.querySelector('burger');
var navList = document.querySelector('nav-links');
var closeBtn = document.querySelector('close');
var overlay = document.querySelector('overlay');

// When the user clicks on the hamburger icon the 'open' class is added
// to both the menu and overlay elements making them visible and triggering the animation
burger.addEventListener('click', function(){
    navList.className += ' open';
    overlay.className += ' open';
})

// When the close button is clicked the 'open' class is removed from
// both the menu and overlay elements making them invisible
closeBtn.addEventListener('click', function(){
    navList.className = 'nav-links';
    overlay.className = 'overlay';
})

// If a user clicks outside the menu on the overlay it will also trigger the event
// to hide the menu and overlay elements
window.addEventListener('click', function(event){
    if(event.target === overlay){
      navList.className = 'nav-Links';
      overlay.className = 'overlay';
    }
  })

