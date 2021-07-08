// PSEUDO CODE: HAMBURGER MENU
// listen for click on the hamburger menu icon
// when clicked, apply the class of .open to the nav, making the navlinks visible
// add an X icon for closing the menu (update its class)
// make the X icon have an event listener so when clicked, it closes the menu and the hamburger returns

// helpful tutorials: 
// https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
// https://www.youtube.com/watch?v=1iS0r238G4g

// 
//declare variables
const burgerMenu = document.querySelector('.hamburgerMenu');
const displayNavLinks = document.querySelector('.navLinks');
const closeMenuButton = document.querySelector('.closeMenu');

burgerMenu.addEventListener('click', function(){
    burgerMenu.classList.toggle('hamburgerMenuOpen')
    displayNavLinks.classList.toggle('open');
    closeMenuButton.classList.toggle('closeMenuVisible');
})

closeMenuButton.addEventListener('click', function(){
    closeMenuButton.classList.toggle('closeMenuVisible');
    burgerMenu.classList.toggle('hamburgerMenuOpen')
    displayNavLinks.classList.toggle('open');
})

// There must be a cleaner/less repetative way to write this...?? Better css / class choices? Using an if statement in a function?


