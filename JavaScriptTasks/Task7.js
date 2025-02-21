let train = document.getElementById("train");
let position = 0;
let animation;

function startAnimation() {
    if (!animation) {
        animation = setInterval(() => {
            if (position < window.innerWidth - train.width) {
                position += 5; // Move the train 5px each step
                train.style.left = position + "px";
            } else {
                position = 0; // Reset position when reaching the end
            }
        }, 50); // Speed of animation
    }
}

function stopAnimation() {
    clearInterval(animation);
    animation = null;
}
