const root = document.documentElement;
const div = document.querySelector("#gradientLettersDiv");
const chars = `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNIOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`;
const size = 110;

let text = {
  content: "PURPLEGUYFOREVER",
  x: 94,
  y: 0,
};

function change(text) {
  div.innerHTML = "";
  let content = text.content;
  for (let y = 0; y < size * 0.45; y++) {
    let el = document.createElement("p");
    for (let x = 0; x < size; x++) {
      if (((y === text.y && x >= text.x) || y > text.y) && content[0]) {
        el.textContent += content[0];
        content = content.substring(1);
      } else {
        el.textContent += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    div.append(el);
  }
}

change(text);
div.addEventListener("mousemove", (e) => {
  change(text);
  div.style.opacity = 1;
});
root.addEventListener("mousemove", (e) => {
  let x = e.x - parseInt(div.getBoundingClientRect().x + div.getBoundingClientRect().width / 2);
  let y = e.y - parseInt(div.getBoundingClientRect().y + div.getBoundingClientRect().height / 2);
  root.style.setProperty("--mouse-x", x.toString() + "px");
  root.style.setProperty("--mouse-y", y.toString() + "px");
});
div.addEventListener("mouseleave", (e) => {
  div.style.opacity = 0;
  div.style.transition = "opacity .5s ease-in";
});
