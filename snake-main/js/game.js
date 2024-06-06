(function () {
  let FPS = 10
  const placar = document.getElementsByClassName("placar")[0];
  const SIZE = 40
  let foodPosition = [];
  let newHead = [];
  let board;
  let snake;
  let score;
  let food;
  let loop;

  class Score{
    constructor(){
      this.points = 0;
    }
    addPoint(){
      this.points+=1;
      placar.textContent = this.points.toString().padStart(4,'0');
    }
  }

  class Food{
    constructor(){
      this.boardSize = SIZE;
      this.position = this.generateRandom()
      foodPosition = this.position;
      this.draw();
    }

    generateRandom(){
      let newPosition = [
        Math.floor(Math.random() * this.boardSize),
        Math.floor(Math.random() * this.boardSize)
      ];
      return newPosition;
    }

    draw(){
      document.querySelector(`#board tr:nth-child(${this.position[0]+1}) td:nth-child(${this.position[1]+1})`).style.background = 'black';
    }
  }

  function init() {
    board = new Board(SIZE);
    snake = new Snake([[4, 4], [4, 5], [4, 6]])
    score = new Score();
    food = new Food();
    loop = setInterval(run, 1000 / FPS)
  }

  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        snake.changeDirection(0)
        break;
      case "ArrowRight":
        snake.changeDirection(1)
        break;
      case "ArrowDown":
        snake.changeDirection(2)
        break;
      case "ArrowLeft":
        snake.changeDirection(3)
        break;
      default:
        break;
    }
  })

  class Board {
    constructor(size) {
      this.element = document.createElement("table")
      this.element.setAttribute("id", "board")
      this.color = "#ccc";
      document.body.appendChild(this.element)
      for (let i = 0; i < size; i++) {
        const row = document.createElement("tr")
        this.element.appendChild(row);
        for (let j = 0; j < size; j++) {
          const field = document.createElement("td");
          row.appendChild(field)
        }
      }
    }
  }

  class Snake {
    constructor(body) {
      this.body = body;
      this.color = "#222";
      this.direction = 1; // 0 para cima, 1 para direita, 2 para baixo, 3 para esquerda
      this.body.forEach(field => document.querySelector(`#board tr:nth-child(${field[0]}) td:nth-child(${field[1]})`).style.backgroundColor = this.color)
    }
    walk() {
      const head = this.body[this.body.length - 1];
      switch (this.direction) {
        case 0:
          newHead = [head[0] - 1, head[1]]
          break;
        case 1:
          newHead = [head[0], head[1] + 1]
          break;
        case 2:
          newHead = [head[0] + 1, head[1]]
          break;
        case 3:
          newHead = [head[0], head[1] - 1]
          break;
        default:
          break;
      }
      
      this.body.push(newHead)
      if(newHead[0] - 1 != foodPosition[0] || newHead[1] - 1 != foodPosition[1]){
        const oldTail = this.body.shift()
        document.querySelector(`#board tr:nth-child(${oldTail[0]}) td:nth-child(${oldTail[1]})`).style.backgroundColor = board.color
      }
      
      document.querySelector(`#board tr:nth-child(${newHead[0]}) td:nth-child(${newHead[1]})`).style.backgroundColor = this.color
    }
    changeDirection(direction) {
      this.direction = direction
    }
  }

  function eatTail(){
    let snakeHead = snake.body[snake.body.length -1];
    const impact = snake.body.slice(0,-1).some(segment => segment[0] === snakeHead[0] && segment[1]=== snakeHead[1]);
    return impact;
  }

  function run() {
    let aux = []
    aux[0] = newHead[0]-1
    aux[1] = newHead[1]-1



    if(snake.body[snake.body.length-1][0] <1 || snake.body[snake.body.length-1][0] >40 || snake.body[snake.body.length-1][1] <1 || snake.body[snake.body.length-1][1] >40 || eatTail() == true){
      clearInterval(loop);
      alert("Game Over!");
    }
    snake.walk()
    
    if(aux[0] == foodPosition[0] && aux[1] == foodPosition[1]){
      /* console.log(`${newHead} e ${foodPosition}\n`) */
      food = new Food();
      score.addPoint();
    }
  }
  window.addEventListener("load", init);
  
})()