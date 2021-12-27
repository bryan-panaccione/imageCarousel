//selectors
const rightButton = document.querySelector('.right')

const leftButton = document.querySelector('.left')

const rightImage = document.querySelector('#rightImg')
const centerImage = document.querySelector('#centerImg')
const leftImage = document.querySelector('#leftImg')
let counter = 0

//event listeners
//rightButton.addEventListener('click', slideRight)
//eventListener 2 - when user clicks on an item in the list -selector2- execute delCheck
//leftButton.addEventListener("click", slideLeft)
$(rightButton).on('click', featureCounter);
$(leftButton).on('click', featureCounter);
$(rightButton).on('click', featureImageRB);
$(leftButton).on('click', featureImageLB);

//functions
function featureCounter(){
	counter +=1
	return counter
}
function featureImageRB () {
	//010 click right arrow
	if (counter % 2 !== 0){
		slideRight_010()
	} else if (counter%2 ===0){
		slideRight_100()
	}
}

function featureImageLB () {
	//010 click right arrow
	if (counter % 2 !== 0){
		slideLeft_010()
	} else if (counter%2 ===0){
		slideLeft_001()
	}
}

function slideRight_010() {
  centerImage.setAttribute('id', 'rightImg')
  rightImage.setAttribute('id', 'centerImg')
 // var rightReset = document.getElementById('rightImg');
  //var parent = rightReset.parentElement;
  //parent.insertBefore(rightReset, centerImage);
}
function slideRight_100() {
  leftImage.setAttribute('id', 'leftImg')
  centerImage.setAttribute('id', 'centerImg')
}
//slide function for each possible type of slide? then one major function with ifs
function slideLeft_001() {
  centerImage.setAttribute('id', 'centerImg')
  rightImage.setAttribute('id', 'rightImg')
}

function slideLeft_010() {
  centerImage.setAttribute('id', 'leftImg')
  leftImage.setAttribute('id', 'centerImg')
}
