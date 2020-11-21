function randomNumber(range) {
  // gets # from 0 -> range - 1
  return Math.floor(Math.random() * range);
}

const answers = {
  yes: [
    "It appears to be in your future.",
    "The stars tell me it's a yes!",
    "Most likely!",
  ],
  no: ["I don't see it happening.", "It looks like a no.", "Out of memory!"],
  maybe: [
    "There is a small chance.",
    "The possibility is there!",
    "You are on the right path, keep going!",
  ],
  "you bet": [
    "Most definitely!",
    "It is written in the stars, defintely yes!",
    "No possible way this will not happen!",
  ],
};

function magicEightBall() {}

magicEightBall();
