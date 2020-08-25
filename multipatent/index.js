function myFunction(x) {
    if (x.matches) { // If media query matches


window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
    });

} else {

    const menu = document.querySelector('.nav-links');

    menu.addEventListener('mouseover', () => {
      menu.classList.add('show-menu')
    })

    menu.addEventListener('mouseleave', () => {
      menu.classList.remove('show-menu')
    })


    
    }
  }
  
  var x = window.matchMedia("(min-width: 720px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes