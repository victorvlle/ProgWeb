(function () {
  let FPS = 5;
  const placar = document.getElementsByClassName("placar")[0];
  const SIZE = 40;
  let isPaused = true;
  let foodPosition = [];
  let newHead = [];
  let board;
  let snake;
  let score;
  let food;
  let loop;
  let frames = 0;

  class Score {
    constructor() {
      this.points = 0;
    }
    addPoint(points) {
      this.points += points;
      placar.textContent = this.points.toString().padStart(4, '0');
    }
  }

  class Food {
    constructor() {
      this.boardSize = SIZE;
      this.position = this.generateRandom();
      foodPosition = this.position;
      this.color = "black";
      this.draw();
    }

    generateRandom() {
      let newPosition
      do{ 
        newPosition = [
        Math.floor(Math.random() * this.boardSize),
        Math.floor(Math.random() * this.boardSize)
        ];
      }while(snake.body.some(slice => slice[0] == newPosition[0] && slice[1] == newPosition[1]));
      
      return newPosition;
    }

    draw() {
      let corRandom = Math.floor(Math.random() * 6);
      if (corRandom > 0 && corRandom < 5) {
        document.querySelector(`#board tr:nth-child(${this.position[0] + 1}) td:nth-child(${this.position[1] + 1})`).style.background = 'black';
        this.color = "black";
      } else {
        document.querySelector(`#board tr:nth-child(${this.position[0] + 1}) td:nth-child(${this.position[1] + 1})`).style.background = 'red';
        this.color = "red";
      }
    }
  }

  function init() {
    board = new Board(SIZE);
    snake = new Snake([[4, 4], [4, 5], [4, 6]]);
    score = new Score();
    food = new Food();
    startGameLoop();
  }

  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        if(snake.direction!=2){
          snake.changeDirection(0); 
        }
        break;
      case "ArrowRight":
        if(snake.direction!=3){
          snake.changeDirection(1);
        }
        break;
      case "ArrowDown":
        if(snake.direction!=0){
          snake.changeDirection(2);
        }
        break;
      case "ArrowLeft":
        if(snake.direction!=1){
          snake.changeDirection(3); 
        }
        break;
      case "p":
        if (isPaused) {
          if(frames >0){
            startGameLoop();
            isPaused = false;
          }
        } else {
          clearInterval(loop);
          isPaused = true;
        }
        break;
      case "s":
        if(frames == 0){
          startGameLoop();
          isPaused = false;
        }else{
          restartGame();
        }
        break;
      default:
        break;
    }
  });

  class Board {
    constructor(size) {
      this.element = document.createElement("table");
      this.element.setAttribute("id", "board");
      this.color = "#ccc";
      document.body.appendChild(this.element);
      for (let i = 0; i < size; i++) {
        const row = document.createElement("tr");
        this.element.appendChild(row);
        for (let j = 0; j < size; j++) {
          const field = document.createElement("td");
          row.appendChild(field);
        }
      }
    }

    clear(){
      document.body.removeChild(this.element);
    }
  }

  class Snake {
    constructor(body) {
      this.body = body;
      this.color = "#222";
      this.direction = 1; // 0 para cima, 1 para direita, 2 para baixo, 3 para esquerda
      this.body.forEach(field => document.querySelector(`#board tr:nth-child(${field[0] + 1}) td:nth-child(${field[1] + 1})`).style.backgroundColor = this.color);
    }
    walk() {
      const head = this.body[this.body.length - 1];
      switch (this.direction) {
        case 0:
          newHead = [head[0] - 1, head[1]];
          break;
        case 1:
          newHead = [head[0], head[1] + 1];
          break;
        case 2:
          newHead = [head[0] + 1, head[1]];
          break;
        case 3:
          newHead = [head[0], head[1] - 1];
          break;
        default:
          break;
      }

      frames++;

      this.body.push(newHead);
      if (newHead[0] != foodPosition[0] || newHead[1] != foodPosition[1]) {
        const oldTail = this.body.shift();
        document.querySelector(`#board tr:nth-child(${oldTail[0] + 1}) td:nth-child(${oldTail[1] + 1})`).style.backgroundColor = board.color;
      }
      document.querySelector(`#board tr:nth-child(${newHead[0] + 1}) td:nth-child(${newHead[1] + 1})`).style.backgroundColor = this.color;
    }
    changeDirection(direction) {
      this.direction = direction;
    }
  }

  function eatTail() {
    let snakeHead = snake.body[snake.body.length - 1];
    const impact = snake.body.slice(0, -1).some(segment => segment[0] === snakeHead[0] && segment[1] === snakeHead[1]);
    return impact;
  }

  function run() {
    if(!isPaused){
      increaseSpeed();
      let aux = [];
      aux[0] = newHead[0];
      aux[1] = newHead[1];

      if (snake.body[snake.body.length - 1][0] < 0 || snake.body[snake.body.length - 1][0] >= SIZE || snake.body[snake.body.length - 1][1] < 0 || snake.body[snake.body.length - 1][1] >= SIZE || eatTail()) {
        clearInterval(loop);
        alert("Game Over!");
      }

      if (aux[0] == foodPosition[0] && aux[1] == foodPosition[1]) {
        if (food.color == "black") {
          score.addPoint(1);
        } else if (food.color == "red") {
          score.addPoint(2);
        }
        food = new Food();
      }

      snake.walk();
    }
  }

  function startGameLoop() {
    if (loop) clearInterval(loop);
    loop = setInterval(run, 1000 / FPS);
  }

  function increaseSpeed() {
    if (frames % 60 == 0 && frames>0) {
      FPS += 0.1;
      console.log(FPS);
      startGameLoop();
    }
  }

  function restartGame(){
    clearInterval(loop);
    frames = 0;
    FPS =5;
    placar.textContent = "0000"
    isPaused = true;
    board.clear();
    init();
  }

  window.addEventListener("load", init);

})();
