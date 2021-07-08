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

// There must be a cleaner way to write this...?? Better css / class choices? Using an if statement in a function?






// PSEUDO CODE 
// To have a comment get posted by a user under the existing blog post comments:

// ---GET---
// - when the user clicks submit - use an event listener;
//  --- need to add the prevent default refresh behaviour bit
// - get the values entered by the user in the form

// ---DO---
// - take the values and prep them for being added to the page???
// - somehow get today's date and add it to the h4 
// - add the users name also to the h4
// - add the users comment to the article <p>
// - WHAT ABOUT A USER IMAGE? - can we give them a few images to choose from to add to their comment??

// ---PASS---
// - post all the things to the page (date, name, comment, image?)

// console.log('this js is working');

//////////////////////////////////////////////////////////

// 1. access the form and add an event listener
// NOTE FROM CLASSMATE SEAN IN DISCUSSION OF ERROR MESSAGE (formEl.addEventListener is not a function): "that error message comes up when you try to addEventListener to anarray of element instead of a single element. So probably due to the getElementsByClassName. If there is only one form, try adding ['0'] at the end"

const formEl = document.getElementsByClassName('commentForm')[0];
// const formEl = document.querySelector('form');

formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submit form clicked');
    
    // 2. get the values the user inputs
    const userName = document.querySelector('[id="name"]').value;
    const userComment = document.querySelector('[id="comment"]').value;
    // console.log(userName);
    // console.log(userComment);
    // neeed to figure out how to add today's date...
    // const commentDate = new Date('need to fix');

    //made the div...need to pick where it is going to go...needs to be last child in the section with a class of "comments"
    const commentSection = document.getElementsByClassName('comments');
    // when submit is clicked...take the user input values and place them into html and onto the page.
    const newCommentDiv = document.createElement('div');
    // newCommentDiv.ClassList.add('newCommentContainer');
    // newCommentDiv.ClassList.add('commentContainer');
    // newCommentDiv.ClassList.add('wrapper');

    // <div class="newCommenterImg commenterImg">
    //     <img class="newImg" src="" alt="">
    // </div>
    // <article class="newCommentArticle commentArticleTitleAndText">
    //     <h4 class="newCommentDateAndName">${userName}</h4>
    //     <p class="newComment">${userComment}</p>
    // </article>
    newCommentDiv.innerHTML = `
        <article>
            <h4>[userName]</h4>
            <p>userComment</p>
        </article>
    `;

    commentSection.appendChild(newCommentDiv);



})

