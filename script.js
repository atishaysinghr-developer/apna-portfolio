// ---------- TYPING EFFECT ----------
const typingElement = document.querySelector(".typing");
const text = "passionate about  Software Developer";
let i = 0;

function typing() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50); // speed of typing
  }
}
typing();

// ---------- SKILLS CIRCLE ANIMATION ----------
const skills = [
  { selector: ".c", target: 90 },
  { selector: ".cpp", target: 75 },
  { selector: ".html", target: 85 },
  { selector: ".css", target: 80 }
];

skills.forEach(skill => {
  const circle = document.querySelector(skill.selector);
  const span = circle.querySelector("span");
  let progress = 0;

  function fillCircle() {
    if(progress <= skill.target){
      // Fill the circle using conic-gradient
      circle.style.background = `conic-gradient(red ${progress * 3.6}deg, #222 0deg)`;
      span.innerHTML = progress + "%";
      progress++;
      requestAnimationFrame(fillCircle);
    }
  }

  fillCircle();
});