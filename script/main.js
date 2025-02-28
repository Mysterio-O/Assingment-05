document.getElementById('discover').addEventListener('click', function () {
    window.location.href = "./blog.html";
})
let increaseElement = document.getElementById('increment');
let increase = parseInt(increaseElement.innerText);
let decreaseElement = document.getElementById('decrement');
let decrease = parseInt(decreaseElement.innerText);
let completedCount = 0;
const buttons = document.querySelectorAll(".btn-primary");


const notification = document.getElementById('history-conatiner');
for (const button of buttons) {
    button.addEventListener('click', function () {
        if (!button.disabled && decrease > 0) {
            alert("Board Updated Successfully");
            increase++;
            decrease--;
            increaseElement.innerText = increase;
            decreaseElement.innerText = decrease;
            const notificationTitle = button.closest(".primary-bg").querySelector("h3").innerText;
            const div = document.createElement("div");
            div.innerHTML = `
                <p class="opacity-70 p-3 primary-bg rounded-md mb-7">You have Complete The Task <strong>${notificationTitle} </strong> at ${new Date().toLocaleTimeString()}</p>
            `
            notification.appendChild(div);
            button.disabled = true;
            completedCount++;
        }
        if (completedCount === buttons.length) {
            alert('congrats!! You have completed all the current task');
        }
    })
}

document.getElementById('clear-history-btn').addEventListener('click', function () {
    notification.innerHTML = '';
})

const themeButton = document.getElementById('theme-btn');
themeButton.addEventListener('click', function () {
    const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random().toFixed(1) * 1})`;
    document.documentElement.style.backgroundColor = randomColor;
})

const dateConatiner = document.querySelector('h4 span');
const now = new Date();
dateConatiner.innerText = now.toLocaleDateString('en-US', {weekday: 'short', month: 'long', day: 'numeric', year: 'numeric'});
