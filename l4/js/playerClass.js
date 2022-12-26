class Player {
  rank = "rookie";
  #lives;

  constructor(_startLives, _startScore) {
    this.#lives = _startLives;
    this.score = _startScore;
  }

  addLives(_val) {
    this.#lives += _val;
    this.#addBonus();
  }

  #addBonus() {
    this.score += this.#lives * 20;
  }

  getLives() {
    return this.#lives;
  }
  getScore() {
    return this.score;
  }
}
