let poem = ["some", "thing", "for", "some", "one"];
let ind;
let x;
let y;
let xoff1 = 0;
let xoff2 = 1000;

function setup() {
  createCanvas(800, 800);
  background(100);
}

function draw() {
  ind = floor(map(noise(xoff1), 0, 1, 0, 6));

  x = map(noise(xoff1), 0, 1, 0, width);
  y = map(noise(xoff2), 0, 1, 0, height);

  xoff1 += 0.01;
  xoff2 += 0.01;

  console.log(ind);
  blendMode(OVERLAY);
  textSize(32);
  text(poem[ind], x, y);

  // adding a comment here
  //first git push
}
