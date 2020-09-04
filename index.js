const app = "I don't do much."

// create an event listener for key down of the id dodger
document.addEventListener('keydown', function(keys) {
  if (keys.which === 37) {
    alert('bingo');
  }
});
// if value equals left run moveLeft func
// if value equals right run moveRight func
