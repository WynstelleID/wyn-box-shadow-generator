let text = document.querySelector(".shadow-text");
let x, y, blur, color;

start = () => {
  x = document.getElementById("x").value;
  y = document.getElementById("y").value;
  blur = document.getElementById("blur").value;
  color = document.getElementById("color").value;
  document.documentElement.style.setProperty("--color", color);

  if (x > 0 || x < 0) {
    document.documentElement.style.setProperty("--x", x + "px");
  }

  if (y > 0 || y < 0) {
    document.documentElement.style.setProperty("--y", y + "px");
  }

  if (blur > 0 || blur < 0) {
    document.documentElement.style.setProperty("--blur", blur + "px");
  }

  text.innerHTML = `box-shadow:${x}px ${y}px ${blur}px ${color};`;
};
