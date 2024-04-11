/* video  y preguntas */
const btns_error = document.querySelectorAll(".error_btn");
const btns_happy = document.querySelectorAll(".confetti_btn");
const btn_media = document.querySelectorAll(".btn_media");
const icons = document.querySelectorAll(".icons");
const if_video_filosofia = document.getElementById("video_filosofia");
const div_preguntas = document.querySelector(".preguntas");
const div_video = document.querySelector(".video");
/* score */
const btn_score = document.querySelector(".score");
const nombres = document.querySelector(".nombres");
const background = document.querySelector(".background");
const score_board = document.querySelector(".score_board");
const input_name = document.getElementById("name");
const envName = document.getElementById("envNombre");
/* ----------------------------------------------- */
let play_video = false;
let num_score = 0;
let score = [];
/* ----------------------------------------------- */

const jsConfetti = new JSConfetti({ btns_error, btns_happy });

btns_happy.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("bg-green-300");
    btn.classList.add("hover:bg-green-300");
    btn.classList.add("jump");
    jsConfetti.addConfetti({
      emojis: ["⭐", "🌟", "✨", "🤩"],
      emojiSize: Math.floor(Math.random() * 70).toFixed(0),
      confettiNumber: 30,
    });
    document.getElementById("felicitacion").play();
  });
});

btns_error.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("bg-red-500");
    btn.classList.add("hover:bg-red-500");
    btn.classList.add("jump");

    jsConfetti.addConfetti({
      emojis: ["⚠️", "🚫"],
      emojiSize: 70,
      confettiNumber: 30,
    });
    document.getElementById("error").play();
  });
});

btn_media.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (play_video) {
      if_video_filosofia.pause();
      play_video = false;

      icons.forEach((icon) => {
        icon.src = "play-svgrepo-com.svg";
        icon.classList.add("jump");
        //esperar 5 segundos
        setTimeout(() => {
          icon.classList.remove("jump");
        }, 1000);
      });
      nombres.classList.add("opacity-0");
      nombres.classList.remove("opacity-50");
      btn_score.classList.remove("hidden");
      div_preguntas.classList.remove("hidden");
      div_preguntas.classList.add("difunminar_backdrop");
      setTimeout(() => {
        div_preguntas.classList.remove("difunminar_backdrop");
      }, 1000);
      div_video.classList.add("hidden");
    } else {
      if_video_filosofia.play();
      play_video = true;

      icons.forEach((icon) => {
        icon.src = "pause-svgrepo-com.svg";
        icon.classList.add("jump");
        setTimeout(() => {
          icon.classList.remove("jump");
        }, 1000);
      });

      nombres.classList.remove("opacity-0");
      nombres.classList.add("opacity-50");

      btn_score.classList.add("hidden");
      div_preguntas.classList.add("hidden");
      div_video.classList.add("difunminar_backdrop");

      setTimeout(() => {
        div_video.classList.remove("difunminar_backdrop");
      }, 1000);
      div_video.classList.remove("hidden");
    }
  });
});

/* score */

btn_score.addEventListener("click", () => {
  background.classList.remove("hidden");
  background.classList.add("difunminar_backdrop");
  score_board.classList.remove("hidden");
  score_board.classList.add("jump");

  setTimeout(() => {
    score_board.classList.remove("difunminar_backdrop");
    score_board.classList.remove("jump");
  }, 1500);
});

background.addEventListener("click", () => {
  background.classList.add("hidden");
  score_board.classList.add("hidden");
});

envName.addEventListener("click", () => {
  if (score.length <= 5 && input_name.value != "") {
    score.push(input_name.value);
    nombres.innerHTML = `SCORE: ${score.join(" - ")}`;
    input_name.value = "";
    setTimeout(() => {
      background.click();
    }, 500);
  } else {
    if (score.length > 5) {
      alert("Haz alcanzado el maximo de participantes");
    } else {
      alert("Ingrese su nombre en la cajita de registro");
    }
  }
});
