const target = document.querySelectorAll(".svg path");
const shapes = document.querySelectorAll(".cadre1 path");
const result = document.getElementById("result");
const content = result.querySelector("#content");

var selectedShape = null;
var targetShape = null;
var count = target.length;
var found = 0;
var attempts = 0;

const puzzle = {
  cadre1: [
    "rightHearR1",
    "leftHear1",
    "rightFace1",
    "leftEyebrow1",
    "rightEye1",
    "rightCheek1",
    "forehead1",
    "leftFace1",
    "rightEyebrow1",
    "leftEye1",
    "leftCheek1"
  ]
};

initCount(count);

target.forEach(f => {
  f.onclick = e => {
    attempts += 1;

    // console.log(e.target.id, selectedShape.replace(/\d/gi, ""));
    if (e.target.id === selectedShape.replace(/\d/gi, "")) {
      found += 1;
      e.target.style.fill = e.target.getAttribute("data-found-color") || "red";
    } else console.log("dommage");
    // count -= 1;
    updateCount(attempts);
    if (attempts === count) {
      gameover();
    }
  };
});

function reduceNumber() {
  var newArray = puzzle.cadre1.map(s => s.slice(0, -1));

  console.log(newArray);
  console.log(puzzle.cadre1);
}

reduceNumber();

shapes.forEach(s => {
  s.onclick = function(e) {
    console.log(`click : ${e.target.id}`);
    selectedShape = e.target.id;
    s.classList.add("formSelect");
    // count -= 1;
    // updateCount(count);
    // // if (count === -1) {
    //   window.alert("Boooouuhh !");
    // } else if (count === 0) {
    //   window.alert("You rock !");
    // }
    // console.log(e.target.class);
    // console.log(puzzle.svg[e.target.class]);
  };
});
// var audio1 = new Audio("Wingame.wav");
// var audio2 = new Audio("Lostgame.wav");

function playSound(mode) {
  var status = {
    win: {
      audio: new Audio("./Wingame.wav"),
      msg: "You Rock !"
    },
    loose: {
      audio: new Audio("./Lostgame.wav"),
      msg: "You Suck !"
    }
  };

  // console.log("-->", status[mode].audio.play());

  status[mode].audio
    .play()
    .then(r => {
      displayResult(status[mode].msg);
      // window.alert(status[mode].msg);
    })
    .catch(err => console.error(err.message));
}

function displayResult(msg) {
  result.classList.toggle("is-active");
  setTimeout(() => {
    content.innerHTML = `${msg} <br>Play again`;
    content.classList.toggle("puff-in-center");
    content.onclick = resetForm;
  }, 1000);
}

function gameover() {
  if (count === found) {
    playSound("win");
  } else {
    playSound("loose");
  }
}

function updateCount(attempts) {
  document.getElementById("count").innerHTML = count - attempts;
}

function initCount(count) {
  document.getElementById("count").innerHTML = count;
}

//When I click it play a random sound included in the repository !!
var sounds = [
  new Audio("./click1.wav"),
  new Audio("./click2.wav"),
  new Audio("./click3.wav"),
  new Audio("./click4.wav")
];

let body = document.querySelector("body");

body.addEventListener("click", function() {
  // Take random sound from list of sounds:
  var sound = sounds[Math.floor(Math.random() * sounds.length)];
  sound.play();
});

//display my instructions
function OnOff() {
  document.getElementById("texte").classList.toggle("is-active");
}

function resetForm() {
  window.location.reload();
}

var compteur = document.getElementById("compteur");
// count = 0;
// compteur.onclick = function() {
//   count += 1;
//   compteur.innerHTML = "" + count;
// };
// function resetForm() {
//   document.getElementById("form").reset();
// }
// resetForm();
