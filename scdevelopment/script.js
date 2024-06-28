let levels = [
  {
    data: [
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
    ],
    answer: 'letter "T"',
  },
  {
    data: [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    answer: 'letter "L"',
  },
  {
    data: [
      [1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    answer: 'letter "E"',
  },
  {
    data: [
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
    ],
    answer: 'letter "H"',
  },
  {
    data: [
      [1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    answer: 'letter "Z"',
  },
  {
    data: [
      [1, 1, 1, 1, 0],
      [1, 1, 0, 0, 1],
      [1, 1, 1, 1, 0],
      [1, 1, 0, 0, 1],
      [1, 1, 1, 1, 0],
    ],
    answer: 'letter "B"',
  },
  {
    data: [
      [1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    answer: 'letter "C"',
  },
  {
    data: [
      [1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
    ],
    answer: 'letter "F"',
  },
  {
    data: [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [1, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    answer: 'letter "1"',
  },
  {
    data: [
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0],
    ],
    answer: 'letter "8"',
  },
];

let levelValue = 1;
let currentLevel = 0;
let levelData;
let table = document.querySelector("table");
let answer = [];

function generateLevel() {
  levelData = levels[currentLevel].data;

  showRowList();
  showColList();

  table.innerHTML = "";

  for (let row = 0; row < levelData.length; row++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let answerRow = [];

    for (let col = 0; col < levelData[row].length; col++) {
      let td = document.createElement("td");
      td.setAttribute("data-row", row);
      td.setAttribute("data-col", col);
      td.addEventListener("click", toggleTD);
      tr.appendChild(td);

      answerRow.push(0);
    }

    answer.push(answerRow);
  }
}

function toggleTD(e) {
  let td = e.target;

  td.classList.toggle("active");

  let row = td.getAttribute("data-row");
  let col = td.getAttribute("data-col");

  if (td.classList.contains("active")) {
    answer[row][col] = 1;
  } else {
    answer[row][col] = 0;
  }

  checkAnswer();
}

function checkAnswer() {
  let passLevel = true;

  for (let row = 0; row < levelData.length; row++) {
    for (let col = 0; col < levelData[row].length; col++) {
      if (levelData[row][col] != answer[row][col]) {
        passLevel = false;
        break;
      }
    }
  }

  if (passLevel) {
    document.querySelector("table").className = "corrected";
    setTimeout(nextLevel, 100);
  }
}

function nextLevel() {
  alert("Correct! It's the " + levels[currentLevel].answer);

  if (levelValue >= 10) {
    levelValue = 1;
  } else {
    levelValue += 1;
  }

  document.querySelector("table").className = "";
  document.querySelector("p").innerHTML = "Levels: " + levelValue;

  currentLevel++;
  if (currentLevel >= levels.length) {
    currentLevel = 0;
  }

  answer = [];
  generateLevel();
}

function nextLevel2() {
  

  if (levelValue >= 10) {
    levelValue = 0;
  } else {
    levelValue += 1;
  }

  document.querySelector("table").className = "";
  document.querySelector("p").innerHTML = "Levels: " + levelValue;

  currentLevel++;
  if (currentLevel >= levels.length) {
    currentLevel = 0;
  }

  answer = [];
  generateLevel();
}

function showRowList() {
  let rowsList = document.getElementById("rowsList");
  rowsList.innerHTML = "";

  for (let row = 0; row < levelData.length; row++) {
    let rowNumArray = [];
    let adjacentNum = 0;

    for (let col = 0; col < levelData[row].length; col++) {
      if (levelData[row][col] == 1) {
        adjacentNum++;

        if (col == levelData[row].length - 1) {
          rowNumArray.push(adjacentNum);

          adjacentNum = 0;
        }
      } else {
        if (adjacentNum > 0) {
          rowNumArray.push(adjacentNum);

          adjacentNum = 0;
        }
      }
    }

    let li = document.createElement("li");
    rowNumArray.forEach(function (eachRow) {
      li.innerHTML += eachRow + " ";
    });
    rowsList.appendChild(li);
  }
}

function showColList() {
  let colsList = document.getElementById("colsList");
  colsList.innerHTML = "";

  for (let col = 0; col < levelData[0].length; col++) {
    let colNumArray = [];
    let adjacentNum = 0;

    for (let row = 0; row < levelData.length; row++) {
      if (levelData[row][col] == 1) {
        adjacentNum++;

        if (row == levelData.length - 1) {
          colNumArray.push(adjacentNum);

          adjacentNum = 0;
        }
      } else {
        if (adjacentNum > 0) {
          colNumArray.push(adjacentNum);

          adjacentNum = 0;
        }
      }
    }

    let li = document.createElement("li");
    colNumArray.forEach(function (eachCol) {
      li.innerHTML += eachCol + "<br>";
    });
    colsList.appendChild(li);
  }
}

generateLevel();

let container = document.querySelector("#container");

window.onload = window.onresize = resizeGame;

function resizeGame() {
  let gameRatio = container.offsetWidth / container.offsetHeight;
  let windowRatio = window.innerWidth / window.innerHeight;

  container.style.position = "absolute";
  container.style.left = `${(window.innerWidth - container.offsetWidth) / 2}px`;
  container.style.top = `${(window.innerHeight - container.offsetHeight) / 2}px`;

  let newScale;
  if (gameRatio > windowRatio) {
    newScale = window.innerWidth / container.offsetWidth;
  } else {
    newScale = window.innerHeight / container.offsetHeight;
  }
  container.style.transform = `scale(${newScale})`;
}
