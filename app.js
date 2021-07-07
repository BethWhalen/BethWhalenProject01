// PSEUDO CODE 
// To have a comment get posted by a user under the existing blog post comments:

// ---GET SOME SHIT---
// - when the user clicks submit - use an event listener;
//  --- need to add the prevent default refresh behaviour bit
// - get the values entered by the user in the form

// ---DO SOME SHIT---
// - take the values and prep them for being added to the page???
// - somehow get today's date and add it to the h4 
// - add the users name also to the h4
// - add the users comment to the article <p>
// - WHAT ABOUT A USER IMAGE? - can we give them a few images to choose from to add to their comment??

// ---PASS SOME SHIT---
// - post all the things to the page (date, name, comment, image?)

// console.log('this js is working');

//////////////////////////////////////////////////////////

// 1. access the form and add an event listener
// NOTE FROM CLASSMATE SEAN IN DISCUSSION OF ERROR MESSAGE (formEl.addEventListener is not a function): "that error message comes up when you try to addEventListener to anarray of element instead of a single element. So probably due to the getElementsByClassName. If there is only one form, try adding ['0'] at the end"

// const formEl = document.getElementsByClassName('commentForm')[0];

const formEl = document.querySelector('form');

formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submit form clicked');

// 2. get the values the user inputs
// not sure if this is correct??
const userName = document.querySelector('[id="name"]');
//neeed to figure out how to add today's date...
const commentDate = new Date('need to fix');

console.log(commentDate);





})

