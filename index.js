// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

function myfunction(){
	var x = 1024;
	var y = 9999;
	var deg = Math.floor(Math.random() * (x-y)) + y;
	document.getElementById('box').style.transform = "rotate(" + deg + "deg)";

	var element = document.getElementById('mainbox');
	setTimeout(function(){
        const box = document.getElementById('modal-body');
        const box2 = document.getElementById('modal-body-2');
        box.style.display = 'none';
        box2.style.display = 'block';

	}, 6000);
}