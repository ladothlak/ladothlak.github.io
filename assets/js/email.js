// JavaScript
const emailBtn = document.getElementById('email-button');

function confirmSent() {
  emailBtn.innerText = 'Message Sent!';
  emailBtn.style.backgroundColor = 'green';
}

emailBtn.addEventListener('click', confirmSent);