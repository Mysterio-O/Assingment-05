document.getElementById('discover').addEventListener('click', function () {
    window.location.href = "./blog.html";
})
let increaseElement = document.getElementById('increment');
let increase = parseInt(increaseElement.innerText);
let decreaseElement = document.getElementById('decrement');
let decrease = parseInt(decreaseElement.innerText);
let completedCount = 0;
const buttons = document.querySelectorAll(".btn-primary");
for (const button of buttons) {
    button.addEventListener('click', function () {
        if (!button.disabled && decrease > 0) {
            alert();
            increase++;
            decrease--;
            increaseElement.innerText = increase;
            decreaseElement.innerText = decrease;
            button.disabled = true;
            completedCount++;
        }
        if(completedCount === buttons.length) {
            alert('done');
        }
    })
}