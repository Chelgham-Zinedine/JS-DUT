

const BOX_PER_LINE_NUMBER = 4;
let gridTab = [];

function init() {
    for (let i = 0; i < BOX_PER_LINE_NUMBER; i++) { // tab init
        gridTab[i] = [];
        for (let j = 0; j < BOX_PER_LINE_NUMBER; j++) {
            const box = {
                value: "",
                lastInsert: false
            };
            let lastBox = box;
            gridTab[i][j] = lastBox;

        }
    }
    window.addEventListener('keydown', keyboardAction); // windows listener
    let r = Math.floor((Math.random() * 3) + 1); // we add 1 because gridTab[r-1] index must be >= to 0
    gridTab[r][Math.floor(Math.random() * 4)].value = 2; // value asignation
    gridTab[r - 1][Math.floor(Math.random() * 4)].value = 2;
    displayGrid();
}


function displayGrid() {
    let game_divs = document.querySelectorAll(".box");
    let game_divs_counter = 0;
    for (let i = 0; i < BOX_PER_LINE_NUMBER; i++) {
        for (let j = 0; j < BOX_PER_LINE_NUMBER; j++) {
            game_divs[game_divs_counter].innerHTML = gridTab[i][j].value;
            game_divs_counter++;
        }
    }
    console.log(gridTab);
}

function keyboardAction(e) {
    if (e.keyCode === 37) { // left arrow
        moveLeft();
    } else if (e.keyCode === 38) { // up arrow
        moveUp();
    } else if (e.keyCode === 39) { // right arrow
        moveRight();
    } else if (e.keyCode === 40) { // up arrow
        moveDown();
    } else
        console.log("wrong key pressed !");

}

/////////////////////////////////////////////////////////////////

function getEmptyBox() { // getEmpycolumn_values
    for (let i = 0; i < BOX_PER_LINE_NUMBER; i++) {
        for (let j = 0; j < BOX_PER_LINE_NUMBER; j++) {
            if (gridTab[i][j].value === "") {
                const myCoordinate = {
                    row: i,
                    column: j
                };
                return myCoordinate;
            }
        }
    }
}


function insertValue(value, coordinate) {
    gridTab[coordinate.row][coordinate.column].value = value;
}

function getNewValue() {
    let r = Math.random(0, 1);
    if (r < 0.9)
        return 2;
    else
        return 4;
}

function isEmptyRow(row) {
    for (let j = 0; j < BOX_PER_LINE_NUMBER; j++) {
        if (gridTab[row][j].value !== "") {
            return false
        }
    }
    return true;
}

function isEmptyColumn(column_index) {
    if (column_index >= 0 && column_index <= 3) {
        for (let i = 0; i < BOX_PER_LINE_NUMBER; i++) {
            if (gridTab[i][column_index].value !== "")
                return false;
        }
    }
    return true;
}

function getLinesValues(line) {
    let row = [];
    for (let j = 0; j < BOX_PER_LINE_NUMBER; j++) {
        if (gridTab[line][j].value !== "") {
            row.push(gridTab[line][j].value);
        }
    }
    return row;
}


////////////////////////////////////////////////////////////////////
function tampValues(column) {
    let column_values = [];
    for (let i = 0; i < BOX_PER_LINE_NUMBER; i++) {
        if (gridTab[i][column].value !== "") {
            column_values.push(gridTab[i][column].value);
            gridTab[i][column].value = "";
        }
    }
    return column_values;

}

function tampTowards(column_values, column, start, end) {
    for (let i = start; i <= end; i++) {
        let t = column_values.pop();
        if (t === undefined) {
            gridTab[Math.abs(i)][column].value = "";
        } else {
            gridTab[Math.abs(i)][column].value = t;
        }
    }
}

function tampTowardsHorizontaly(line, line_values, start, end) {
    for (let j = start; j <= end; j++) {
        let t = line_values.pop();
        if (t === undefined) {
            gridTab[line][Math.abs(j)].value = "";
        } else {
            gridTab[line][Math.abs(j)].value = t;
        }
    }
}


function mergeTo(column_values) {
    for (let i = 0; i < column_values.length - 1; i++) {
        if (column_values[i] === column_values[i + 1]) {
            column_values[i] = column_values[i] * 2;
            column_values.splice(i + 1, 1)
            break;
        }
    }
}

function moveUp() {
    console.log("up !");
    for (let j = 0; j < BOX_PER_LINE_NUMBER; j++) {
        if (!isEmptyColumn(j)) {
            column_values = tampValues(j); //temp array for temping 
            tampTowards(column_values.slice(), j, 0, BOX_PER_LINE_NUMBER - 1);
            //check if a merge is needed 
            let hasDuplicate = column_values.some((val, i) => column_values.indexOf(val) !== i); //from stackoverflow website
            if (hasDuplicate) {
                mergeTo(column_values);
                tampTowards(column_values, j, 0, BOX_PER_LINE_NUMBER - 1)
            }
        }
    }
    insertValue(getNewValue(), getEmptyBox());
    displayGrid();
}


function moveDown() {
    console.log("down !");
    for (let j = 0; j < BOX_PER_LINE_NUMBER; j++) {
        if (!isEmptyColumn(j)) {
            column_values = tampValues(j);
            tampTowards(column_values.slice(), j, -BOX_PER_LINE_NUMBER + 1, 0);
            let hasDuplicate = column_values.some((val, i) => column_values.indexOf(val) !== i); //from stackoverflow website
            if (hasDuplicate) {
                mergeTo(column_values);
                tampTowards(column_values, j, -BOX_PER_LINE_NUMBER + 1, 0);
            }
        }
    }
    insertValue(getNewValue(), getEmptyBox());
    displayGrid();
}


function moveRight() {
    console.log("right !");
    for (let i = 0; i < BOX_PER_LINE_NUMBER; i++) {
        if (!isEmptyRow(i)) {
            line_values = getLinesValues(i);
            tampTowardsHorizontaly(i, line_values.slice(), -BOX_PER_LINE_NUMBER + 1, 0);
            let hasDuplicate = line_values.some((val, i) => line_values.indexOf(val) !== i); //from stackoverflow website
            if (hasDuplicate) {
                mergeTo(line_values);
                tampTowardsHorizontaly(i, line_values, -BOX_PER_LINE_NUMBER + 1, 0);
            }
        }
    }
    insertValue(getNewValue(), getEmptyBox());
    displayGrid();
}


function moveLeft() {
    console.log("left !");
    for (let i = 0; i < BOX_PER_LINE_NUMBER; i++) {
        if (!isEmptyRow(i)) {
            line_values = getLinesValues(i);
            tampTowardsHorizontaly(i, line_values.slice(), 0, BOX_PER_LINE_NUMBER - 1);
            let hasDuplicate = line_values.some((val, i) => line_values.indexOf(val) !== i); //from stackoverflow website
            if (hasDuplicate) {
                mergeTo(line_values);
                tampTowardsHorizontaly(i, line_values, 0, BOX_PER_LINE_NUMBER - 1);
            }
        }
    }
    insertValue(getNewValue(), getEmptyBox());
    displayGrid();
}


function onLoad() {
    console.log('Processus de chargement du document terminé…');
    init();
}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;
