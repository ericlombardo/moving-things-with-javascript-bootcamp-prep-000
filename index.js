const app = "I don't do much."

function moveDodgerLeft() {
  // get dodger / remove px / turn into number / assign dodger to left - 1
  var dodger = document.getElementById('dodger');
  
}
function moveDodgerRight() {
  // get dodger / remove px / turn into number / assign dodger to left - 1
}
// create an event listener for key down of the id dodger
document.addEventListener('keydown', function(keys) {
  // if left key is pressed
  if (keys.which === 37) {
    // run function
    moveDodgerLeft();
    // stop if left ==== 0 (you hit the wall)
  // if right key is pressed
  } if (keys.which === 39) {
    // run function
    moveDodgerRight();
    // stop if right ==== 0 (you hit the wall)
  }
});
