//selectors
const rightButton = document.querySelector('.right')

const leftButton = document.querySelector('.left')

const rightImage = document.querySelector('#rightImg')
const centerImage = document.querySelector('#centerImg')
const leftImage = document.querySelector('#leftImg')

//event listeners
//rightButton.addEventListener('click', slideRight)
//eventListener 2 - when user clicks on an item in the list -selector2- execute delCheck
//leftButton.addEventListener("click", slideLeft)
$(rightButton).on('click', rightButton, slideRight);
$(leftButton).on('click', leftButton, slideLeft);

//functions
function slideRight() {
  console.log('its in slideR')
  leftImage.setAttribute('id', 'rightImg')
  centerImage.setAttribute('id', 'leftImg')
  rightImage.setAttribute('id', 'centerImg')
 // var rightReset = document.getElementById('rightImg');
  //var parent = rightReset.parentElement;
  //parent.insertBefore(rightReset, centerImage);
}

function slideLeft() {
  console.log('its in slideL')
  leftImage.setAttribute('id', 'centerImg')
  centerImage.setAttribute('id', 'rightImg')
  rightImage.setAttribute('id', 'leftImg')
}
