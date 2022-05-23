let btnsContainer = document.querySelector(".btns-container");
let resultSpan = document.querySelector(".result-span");
let computerSpan = document.querySelector(".computer-span");
let playerSpan = document.querySelector(".player-span");
let playAgin = document.querySelector(".agin-btn");
let firstImage = document.querySelector(".first-image");
let secImage = document.querySelector(".sec-image");
let playerChoice = "";
let computerChoice = "";
let options = ["Rock", "Paper", "scisser"];
let images = ["images/rock.png", "images/paper.png", "images/scisser.png"];

//create btns and append it to the page
options.forEach(function(option) {
    let element = document.createElement("button");
    element.innerHTML = option;
    element.classList.add(option);
    element.classList.add("option");
    btnsContainer.appendChild(element);
    console.log(element.className);
});
// change result spane state
let btns = document.querySelectorAll(".option");
btns.forEach(function(btn) {
    btn.onclick = function() {
        playerChoice = btn.innerHTML;
        playerSpan.innerHTML = playerChoice;
        computerChoice = computerChoiceCreater(options);
        computerSpan.innerHTML = computerChoice;
        resultSpan.innerHTML = winner(computerChoice, playerChoice);
        firstImage.src = "images/" + playerChoice + ".png ";
        secImage.src = "images/" + computerChoice + ".png ";
        console.log(firstImage);
    };
});

function winner(computerChoice, playerChoice) {
    //IF THEY ARE EQUAL
    // RETURN "EQUAL".....
    //IF NOT FOUND THE MOST PRIORITY AND RETURN IT

    if (computerChoice != null && playerChoice != null) {
        // same input
        if (computerChoice === playerChoice) {
            return "same choises";
        }

        // Rock
        if (computerChoice === "Rock") {
            if (playerChoice === "scisser") {
                return "computer wins";
            } else {
                return "you win";
            }
        }
        // Paper
        else if (computerChoice === "Paper") {
            if (playerChoice === "Rock") {
                return "computer win";
            } else {
                return "you win";
            }
        }
        // Scissors
        else if (computerChoice === "scisser") {
            if (playerChoice === "Paper") {
                return "computer win";
            } else {
                return "you win";
            }
        }
    }
}

function computerChoiceCreater(arr) {
    let selected = arr[Math.floor(Math.random() * arr.length)];
    return selected;
}
playAgin.onclick = function() {
    playerSpan.innerHTML = "Please select any option";
    computerSpan.innerHTML = "";
    resultSpan.innerHTML = "";
    firstImage.src = "images/all.jpg ";
    secImage.src = "images/all.jpg ";
};