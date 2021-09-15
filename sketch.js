let poem = ["some", "thing", "for", "some", "one"];
let ind;
let x;
let y;
let xoff1 = 0;
let xoff2 = 1000;
let button;
let h1;

function setup() {
  resetSketch();
  noLoop();

  //button
  h1 = createP("restart");
  h1.position(30, 100);
  h1.style("color:black");

  button = createButton("⟲");
  button.position(30, 140);
  button.mousePressed(resetSketch);
  button.style("color:black");

  h1 = createP("Start/Stop");
  h1.position(730, 100);
  h1.style("color:black");

  pause = createButton("▹");
  pause.position(760, 140);
  pause.mousePressed(resetSketch);
  pause.style("color:black");
}

function resetSketch() {
  createCanvas(800, 800);
  background(200);
  loop();

  //draw();
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
  fill(00);
  text(poem[ind], x, y);
  // adding a comment here
  //first git push
}
