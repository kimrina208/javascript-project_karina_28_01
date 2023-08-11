function isValidEmail(email) {
  // Простая регулярная проверка на соответствие паттерну email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

const emailToCheck = "example@example.com";
if (isValidEmail(emailToCheck)) {
  console.log("Email валиден.");
} else {
  console.log("Email невалиден.");
}


//
const childBlock = document.getElementById('child_block');
let position = 0;

function moveChildBlock() {
  childBlock.style.left = position + 'px';
  position++;

  if (position > 446) {
    return;
  }

  setTimeout(moveChildBlock, 10);
}

moveChildBlock();