// Main data

const DB_Quiz = [
  {
    question: "1) Programmer itu ...",
    answer: ["A.Kuat dan pantang menyerah", "B. Lemah", "C. Mudah menyerah", "D. Orang yang menulis code"],
  },
  {
    question: "2) Bahasa pemograman yang benar di bawah ini adalah",
    answer: ["A. Golang , Ruby , Python ", "B. framework , Python , Ruby", "C.Javascript , Golang , reactjs ", "D.PHP ,HTML , Bootstrap"],
  },
  {
    question: "3) 🐍 merupakan bahasa pemograman apa?",
    answer: ["A. Javascript", "B. Python", "C. Golang", "D.Ruby"],
  },
  {
    question: "4) Wifu Bot di discord adalah ",
    answer: ["A.Mudhae", "B.Udae", "C. Mudae", "D.Dudae"],
  },
  {
    question: "5) untuk mengelompokan komponen dan bersifat unik pada HTML",
    answer: ["A. class", "B. div", "C. index", "D. id"],
  },
  {
    question: "6) Ibu berjalan di pasar ke arah jam 12 ,dengan jarak 12 m.Kemudian ibu melihat tomat segar yang di jual di arah jam 15, dengan jarak 9 m.Maka jarak ibu untuk kembali ke titik awal adalah ",
    answer: ["A. √63 m", "B. 2√4 m", "C. 15 m ", "D. 8 m"],
  },
  {
    question: "7) Komponen yang bertugas sebagai otak dalam pemogramman adalah",
    answer: ["A. Javascript", "B. HTML", "C. CSS", "D. Semua salah :("],
  },
  {
    question:
      "8) Andy mempunyai berapa puzzel batangan, saat ia memasukan semua puzzel kedalam lubang yang tersedia ,ternyata kurang satu buah yaitu batang lurus berukuran 4 cm.Andy menyisakan 3 buah batang yatu batang dengan panjang 2 cm 5 cm & 8 cm.Bagaimana cara Andy untuk menyelesaikan puzzle tersebut?",
    answer: ["A. Membelah dua batang yang memiliki panjang 2 cm dan 5 cm  ", "B. Membelah dua batang yang memeliki panjang 8 cm", "C. Membelah tiga batang yang memiliki panjang 8 cm", "D. Bingung, dan tidak ada solusi yang tepat"],
  },
  {
    question: "9) I + I ?",
    answer: ["A. II", "B. 2", "C. two", "D. dua"],
  },
  {
    question: "10) Manusia bernapas dengan",
    answer: ["A. Paru-paru", "B. Tenanga", "C. Oksigen", "D.Izin Allah"],
  },
];

const CORRECT_ANSWER = [3, 0, 1, 2, 3, 2, 0, 1, 0, 3];

// =============== Setup Question ===============

function startGame() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("quizs").style.display = "block";
}

let current_q = 0;
let total_score = 0;
let saveAnswer = [];

document.addEventListener("DOMContentLoaded", function (event) {
  setupQuestion();
});

function setupQuestion() {
  document.getElementById("question").innerHTML = DB_Quiz[current_q]["question"];
  document.getElementById("choiceText0").innerHTML = DB_Quiz[current_q]["answer"][0];
  document.getElementById("choiceText1").innerHTML = DB_Quiz[current_q]["answer"][1];
  document.getElementById("choiceText2").innerHTML = DB_Quiz[current_q]["answer"][2];
  document.getElementById("choiceText3").innerHTML = DB_Quiz[current_q]["answer"][3];
}

function nextQuest() {
  current_q++;

  save_Answer();

  if (current_q > DB_Quiz.length - 1) stopQuiz();

  resetState();
  setupQuestion();
}

function save_Answer() {
  const answer = document.querySelector('input[name="choices"]:checked');
  if (answer != null) {
    saveAnswer.push(parseInt(answer.getAttribute("data-id")));
  } else {
    saveAnswer.push(0);
  }
}

function resetState() {
  document.querySelector('input[name="choices"]:checked').checked = false;
}

function stopQuiz() {
  checkScore();
  document.getElementById("quizs").style.display = "none";
  document.getElementById("closing").style.display = "block";
  document.getElementById("scoreText").innerHTML = text_score;
  return;
}

function checkScore() {
  for (i = 0; i < saveAnswer.length; i++) {
    if (saveAnswer[i] == CORRECT_ANSWER[i]) total_score += (DB_Quiz.length * 2) / 2;
    if (total_score > 0 && total_score < 60) text_score = total_score + "<br>" + " don't give up!";
    else if (total_score > 60 && total_score < 90) text_score = total_score + "<br>" + " Nice Try!";
    else text_score = total_score + "<br>" + " Excallent!";
  }
}

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      // timer = duration;
      stopQuiz();
    }
  }, 1000);
}

window.onload = function () {
  var Minutes = 60 * 5,
    display = document.querySelector("#time");
  startTimer(Minutes, display);
};
