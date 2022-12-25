let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0


function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

let homeScoreBtnTwo = document.getElementById("home-score-btn-2")

function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

let homeScoreBtnThree = document.getElementById("home-score-btn-3")

function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

let homeScoreBtnFour = document.getElementById("home-score-btn-4")

function decreaseHomeScoreOne(){
    homeScore -= 1
    homeStoreEl.textContent = homeScore
}

let homeScoreBtnFive = document.getElementById("home-score-btn-5")

function decreaseHomeScoreTwo(){
    homeScore -= 2
    homeStoreEl.textContent = homeScore
}

let homeScoreBtnSix = document.getElementById("home-score-btn-6")

function decreaseHomeScoreThree(){
    homeScore -= 3
    homeStoreEl.textContent = homeScore
}

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestStoreEl = document.getElementById("guest-score")
let guestScore = 0


function increaseGuestScoreOne(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")

function increaseGuestScoreTwo() {
	guestScore += 2
    guestStoreEl.textContent = guestScore
}

let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

function increaseGuestScoreThree() {
	guestScore += 3
    guestStoreEl.textContent = guestScore
}

let guestScoreBtnFour = document.getElementById("guest-score-btn-4")

function decreaseGuestScoreOne() {
	guestScore -= 1
    guestStoreEl.textContent = guestScore
}

let guestScoreBtnFive = document.getElementById("guest-score-btn-5")

function decreaseGuestScoreTwo() {
	guestScore -= 2
    guestStoreEl.textContent = guestScore
}

let guestScoreBtnSix = document.getElementById("guest-score-btn-6")

function decreaseGuestScoreThree() {
	guestScore -= 3
    guestStoreEl.textContent = guestScore
}

let resetBtn = document.getElementById("reset-btn")

function resetScoreZero() {
    guestScore = 0
    homeScore = 0
    guestStoreEl.textContent = 0
    homeStoreEl.textContent = 0
}