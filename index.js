const app = "I don't do much."

function moveDodgerLeft() {
  // remove px / turn into number / assign dodger to left - 1
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
  // get dodger / remove px / turn into number / assign dodger to left - 1
}
// create an event listener for key down of the id dodger
document.addEventListener('keydown', function(keys) {
  var dodger = document.getElementById('dodger');
  // if left key is pressed
  if (keys.which === 37) {
    // run function
    moveDodgerLeft();
  // if right key is pressed
  } if (keys.which === 39) {
    // run function
    moveDodgerRight();
  }
});
