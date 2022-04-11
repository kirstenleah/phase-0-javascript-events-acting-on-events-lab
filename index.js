// Your code here
const dodger = document.getElementById('dodger');
function moveDodgerLeft() {
    let left = parseInt(leftNumbers, 10)
    const leftNumbers = dodger.style.left.replace('px', '');
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}
function moveDodgerRight() {
    let right = parseInt(rightNumbers, 10)
    const rightNumbers = dodger.style.right.replace('px', '');
    if (right < 360) {
        dodger.style.right = `${left + 1}px`
    }
}
document.addEventListener('keydown', function(e){
    if (e.key === "ArrowLeft") {
       moveDodgerLeft()
    }
});
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})