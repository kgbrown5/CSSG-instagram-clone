let count = 837;
let following = false;
const button = document.getElementById('follow-button');
const counter = document.getElementById('follow-count');

button.addEventListener('click', () => {
    if (following) {
        count--;
        button.innerText = "Follow";
        button.style.background = "rgb(38, 133, 234)";
        button.style.color = "white";
    } else {
        count++;
        button.innerText = "Unfollow";
        button.style.background = "white";
        button.style.color = "rgb(38, 133, 234)";
    }
    counter.innerText = count.toString();
    following = !following;
});