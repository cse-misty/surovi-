const element = document.getElementById('scrolling-text');
const text = "This is a sample scrolling text that scrolls to the right continuously.";
let index = 0;

function showCharacters() {
    if (index <= text.length) {
        element.textContent = text.slice(0, index);
        index++;
        setTimeout(showCharacters, 25); // speed control
    } else {
        setTimeout(() => {
            element.textContent = "";
            index = 0;
            showCharacters();
        }, 1500); // pause after full text
    }
}

showCharacters();

