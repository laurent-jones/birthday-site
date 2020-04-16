const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const magic = () => {
  Array(...document.getElementsByClassName("letter")).forEach((el) =>
    el.setAttribute("style", `color: ${getRandomColor()};`)
  );
  document
    .getElementsByTagName("body")[0]
    .setAttribute("style", `background-color: ${getRandomColor()};`);
};

magic();

window.setInterval(magic, 800);
