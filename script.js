const textarea = document.getElementById('message');
const charCount = document.getElementById('char-count');
const maxLength = 250;

textarea.addEventListener('input', () => {
  const currentLength = textarea.value.length;
  charCount.textContent = `${currentLength} / ${maxLength}`;

  if (currentLength >= maxLength) {
    textarea.classList.add('limit-reached');
  } else {
    textarea.classList.remove('limit-reached');
  }
});
