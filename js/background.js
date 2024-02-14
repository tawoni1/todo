const images = [
  "euro1.jpg",
  "euro2.jpg",
  "euro3.jpg",
  "euro4.jpg",
  "euro5.jpg",
  "euro6.jpg",
  "euro7.jpg",
  "euro8.jpg",
  "euro10.jpg",
  "euro11.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

/* const bgImage = document.createElement("img");
bgImage.src = `/img/${chosenImage}`;
document.body.appendChild(bgImage); */

document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/${chosenImage})`;
