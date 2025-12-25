const coins = document.querySelectorAll(".coin");

coins.forEach(coin => {
  const sound = new Audio("assets/sounds/coin.wav");

  coin.addEventListener("mouseenter", () => {
    sound.currentTime = 0;
    sound.play();
  });
});


const powerUps = document.querySelectorAll(".power-up");

powerUps.forEach(item => {
  const sound = new Audio("assets/sounds/powerup.wav");

  item.addEventListener("mouseenter", () => {
    sound.currentTime = 0;
    sound.play();
  });
});
