let mFont;

let mSize = 30;

let word = "love";
let newText = "more more more more more more more more more love";

let s0 = "Love Explained";

let phrase =
  "In idle dreams of lGuy calls the doctor, says the wifes contractions are five minutes apart. Doctor says, Is this her first child? guy says, No, it’s her husband.I promise to try to remember who   I am. Wife gets up on one elbow, says, I wanted to get married. It seemed a fulfillment of some several things, a thing to be done. Even the diamond ring was some thing like a quest, a thing they set you out to get and how insane the quest is; how you have to turn it every way before you can even think to seek it; this metaphysical  refraining is in fact the quest. Who have guessed? She sighs, I like the predictability of two, I like my pleasures fully expected,   when the expectation of them grows patterned in its steady surprise. I’ve got my sweet and tumble pat.t upon a thing like that. Thus explained the woman in contractions to her lover holding on the telephone for the doctor to recover from this strange conversational turn. You say you are whom? It is a pleasure to meet you. She rolls her eyes, but he’d once asked her Am I your first lover? and she would said, Could be. Your face looks familiar. It is the same type of generative error. The grammarof the spoken word will flip, let alone the written, until something new is in us, and in our conversation.";
  let MARGIN = 40;
  let currentMaxIndex;

function preload() {
  mFont = loadFont("./Sniglet Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(mFont);
  textSize(mSize);
  textAlign(RIGHT, TOP);
  fill(250);
  currentMaxIndex = 1;
}

function draw() {
  background(122, 240, 154);

  let max_xy = frameCount % height;

  for (let xy = 0; xy < max_xy; xy += mSize) {
    let bbox = mFont.textBounds(word, xy, xy);
    fill(220, 122, 240);
    circle(bbox.x+30, bbox.y+15, 30);
    fill(0);
    text(word, xy, xy);

    let newX = xy + mSize + mSize + mSize;
    let newY = xy;
    fill(255,0,0,63);
    text(newText, newX, newY);

    fill(240, 122, 206);
    text(s0, mouseX, mouseY);

    fill(74, 54, 68);
    currentMaxIndex = min(currentMaxIndex + 1, phrase.length);

    let phraseToDraw = phrase.slice(0, currentMaxIndex);
    text(phraseToDraw, MARGIN, MARGIN, width - 2 * MARGIN, height);
  }
}
  

