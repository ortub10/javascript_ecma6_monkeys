window.onload = () => {
  createPlayer();
};

const createPlayer = () => {
  let player1 = new Player(4, 100);
  console.log(player1);
  //   player1.lives = 0; // Not good
  //   console.log(player1);
  let lives = player1.getLives();
  console.log(lives);
  player1.addLives(3);
  console.log(player1);
};
