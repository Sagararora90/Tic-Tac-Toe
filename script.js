let button = document.querySelectorAll(".btn");
let h2 = document.querySelector("h2");
let btn = document.getElementById("btn");
let chance = 'X';

function change_chance() {
    chance = chance === 'X' ? 'O' : 'X';
}

button.forEach(e => {
    e.addEventListener("click", () => {
        if (e.textContent === "") { 
            e.textContent = chance;
            e.style.fontSize = "30px";
            e.disabled = true;
            check();
            change_chance();
        }
    });
});

function check() {
    const winningCombos = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]  
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;

        if (
            button[a].textContent &&
            button[a].textContent === button[b].textContent &&
            button[a].textContent === button[c].textContent
        ) {
            h2.textContent = `Winner is ${button[a].textContent}`;
            btn.style.display = "block";
            disableButtons();
            return;
        }
    }

    if (Array.from(button).every(btn => btn.textContent !== "")) {
        h2.textContent = "It's a draw!";
        btn.style.display = "block";
    }
}

function disableButtons() {
    button.forEach(e => {
        e.disabled = true;
    });
}

function resetGame() {
    button.forEach(e => {
        e.textContent = "";
        e.disabled = false;
    });
    h2.textContent = "";
    chance = 'X';
    btn.style.display = "none";
}
