import questions from "./question.js";

const startBtn = document.getElementById("start_btn");
const exitBtn = document.getElementById("exit_btn");
const ContinueBtn = document.getElementById("Continue_btn");
const infoDiv = document.querySelector(".info_div");
const quizDiv = document.querySelector(".quiz_div");
const nextBtn = document.querySelector(".next_btn");
const questionContainer = document.querySelector(".question_Con");
const questionRateInfo = document.querySelector(".rate_info");
const timer = document.querySelector(".timer");
const scoreCard = document.querySelector(".score_card");
const scoreInfo = document.querySelector(".score_info");
const replayBtn = document.getElementById("replay_btn");
const quitBtn = document.getElementById("quit_btn");

let quizIndex;
let counter;
let timeFomat;
let userScore = 0;
let timeCount = 300;


function timeFunc() {
  counter = setInterval(() => {
    timeCount--;

    let minutes = Math.floor(timeCount / 60);
    let seconds = timeCount % 60;

    timeFomat = `${minutes}: ${seconds > 10 ? '' : '0'}${seconds}`;
    timer.textContent = timeFomat;

    if (timeCount <= 0) {
      quizDiv.classList.remove("block");
      quizDiv.classList.add("hidden");
      showScoreBoard();
    }
  }, 1000);
}

function showQuiz(num) {
  const quizQuest = questions[num].question;
  const quizNumb = questions[num].number;

  const element = `
        <h2 class="font-bold question_info text-2xl text-center mb-4">
          <span>${quizNumb}.</span> ${quizQuest}
        </h2>
        <div class="flex flex-col gap-4 option_list">${showOption(num)}</div>
        `;

  questionContainer.innerHTML = element;
  const optionList = document.querySelector(".option_list");
  const options = optionList.querySelectorAll(".option");

  // Add event listeners to options
  options.forEach((opt) => {
    opt.addEventListener("click", function () {
      chooseOption(this, options);
    });
  });

  showQuestionRate(num);
}

function showOption(num) {
  const optionContainer = `
            <span class="option w-full bg-midGrey p-2 border-2 border-teal rounded-md"
              >${questions[num].options[0]}</span>
            <span class="option w-full bg-midGrey p-2 border-2 border-teal rounded-md"
              >${questions[num].options[1]}</span>
            <span class="option w-full bg-midGrey p-2 border-2 border-teal rounded-md"
              >${questions[num].options[2]}</span>
            <span class="option w-full bg-midGrey p-2 border-2 border-teal rounded-md"
              >${questions[num].options[3]}</span>`;

  return optionContainer;
}

function chooseOption(selectedOption, options) {
  let userAnswer = selectedOption.textContent;
  let correctAnswer = questions[quizIndex].answer;

  options.forEach((opt) => {
    opt.style.pointerEvents = "none";
  });

  if (userAnswer === correctAnswer) {
    selectedOption.classList.add("correct");
    userScore++;
  } else {
    selectedOption.classList.add("wrong");
    options.forEach((opt) => {
      if (opt.textContent === correctAnswer) {
        opt.classList.add("correct");
      }
    });
  }
}

function showQuestionRate(num) {
  const questionRate = `
          <p>
            <span class="font-bold text-xl">${questions[num].number}</span> of
            <span class="font-bold text-xl">${questions.length}</span> Questions
          </p>
    `;
  questionRateInfo.innerHTML = questionRate;
}

function showScoreBoard() {
  scoreCard.classList.remove("hidden");
  scoreCard.classList.add("block");
  const info = `
  <h4 class="font-bold text-xl text-center">
          You've completed the Quiz
   </h4>
  <p class="font-semibold text-lg text-center">Your got ${userScore} out of ${questions.length}</p>`;

  scoreInfo.innerHTML = info;
}

startBtn.addEventListener("click", function () {
  this.classList.add("hidden");
  infoDiv.classList.remove("hidden");
  infoDiv.classList.add("flex");
});

exitBtn.addEventListener("click", function () {
  infoDiv.classList.add("hidden");
  infoDiv.classList.remove("flex");
  startBtn.classList.remove("hidden");
});

ContinueBtn.addEventListener("click", function () {
  quizIndex = 0;
  infoDiv.classList.remove("flex");
  infoDiv.classList.add("hidden");
  quizDiv.classList.remove("hidden");
  quizDiv.classList.add("block");
  showQuiz(quizIndex);
  timeFunc();
});

nextBtn.addEventListener("click", () => {
  quizIndex++;

  if (quizIndex > questions.length - 1) {
    quizIndex = 0;
    quizDiv.classList.remove("block");
    quizDiv.classList.add("hidden");
    showScoreBoard();
  }
  showQuiz(quizIndex);
});

quitBtn.addEventListener("click", function () {
  window.location.reload();
});

replayBtn.addEventListener("click", function () {
  quizIndex = 0;
  userScore = 0;
  timeCount = 60;
  quizDiv.classList.remove("hidden");
  quizDiv.classList.add("block");
  showQuiz(quizIndex);
  timeFunc();
  scoreCard.classList.add("hidden");
  scoreInfo.innerHTML = "";
});
