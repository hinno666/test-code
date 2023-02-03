//popups

const popupOne = document.querySelector(".popup__one");
const popupTwo = document.querySelector('.popup__two');
const popupThree = document.querySelector('.popup__three');

//popups close buttons
const popupOneClose = popupOne.querySelector(".popup__close");
const popupTwoClose = popupTwo.querySelector(".popup__close");
const popupThreeClose = popupThree.querySelector(".popup__close");

//popups open buttons   
const popupOneOpen = document.querySelector(".popup-open_one");
const popupTwoOpen = document.querySelector('.popup-open_two');
const popupThreeOpen = document.querySelector('.popup-open_three');


const togglePopup = function(popup) {
    popup.classList.toggle('.popup__opened');
};

popupOneOpen.addEventListener('click', () => {
   togglePopup(popupOne); 
})