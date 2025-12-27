const coins = document.querySelectorAll(".coin");

coins.forEach(coin => {
  const sound = new Audio("assets/sounds/coin.wav");

  coin.addEventListener("mouseenter", () => {
    sound.currentTime = 0;
    sound.play();
  });
});

// Animate coin to move across screen
coins.forEach(coin => {
  let position = 0;
  let direction = 1; // 1 = right, -1 = left
  const speed = 2;
  
  function moveCoin() {
    position += speed * direction;
    
    // Get the width of the viewport and coin
    const maxPosition = window.innerWidth - coin.offsetWidth;
    
    // Reverse direction at edges
    if (position >= maxPosition) {
      position = maxPosition;
      direction = -1;
    } else if (position <= 0) {
      position = 0;
      direction = 1;
    }
    
    coin.style.position = 'absolute';
    coin.style.left = position + 'px';
    
    requestAnimationFrame(moveCoin);
  }
  
  moveCoin();
});


const powerUps = document.querySelectorAll(".power-up");

powerUps.forEach(item => {
  const sound = new Audio("assets/sounds/powerup.wav");

  item.addEventListener("mouseenter", () => {
    sound.currentTime = 0;
    sound.play();
  });
});


const pipes = document.querySelectorAll(".pipe");

pipes.forEach(pipe => {
  const sound = new Audio("assets/sounds/pipe.wav");

  pipe.addEventListener("click", () => {
    sound.play();
  });
});


const blocks = document.querySelectorAll(".block");

blocks.forEach((block, index) => {
  block.addEventListener("click", () => {
    if (block.textContent === "?") {
      block.textContent = ["WIP", "LAB", "IDEA"][index];
    }
  });
});


const castle = document.querySelector(".world-castle");
const victorySound = new Audio("assets/sounds/victory.wav");

let played = false;

castle.addEventListener("mouseenter", () => {
  if (!played) {
    victorySound.play();
    played = true;
  }
});