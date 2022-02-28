const heightElement = document.getElementById('field-height');
const widthElement = document.getElementById('field-width');
const bombsNumElement = document.getElementById('total-bombs-num');

/*function printSize(event) {
    console.log(heightElement.value);
    console.log(widthElement.value);
    console.log(event.target);
    event.target.innerHTML = '1';
    event.target.style.backgroundColor = "rgb(158, 212, 214)";
    event.target.style.border = "none";
    event.target.style.boxShadow = "none";
}

document.getElementById('start-button').addEventListener('click', printSize);
[...document.getElementsByClassName('field-cell-box')].forEach(cell => {
    cell.addEventListener('click', printSize);
});*/
function startGame() {
    // totalCells is the size of the field - multipiction of the height and width
    const heightStart = Number(heightElement.value);
    const widthStart = Number(widthElement.value);
    // Get the number of bombs from the input
    const bombsStart = Number(bombsNumElement.value);
    const field = createField(heightStart, widthStart, bombsStart);
    console.log(field);
}

function createField(heightValue, widthValue, bombsValue) {
    const totalCells = heightValue * widthValue;
    // Creat the field as an array and make all it's values 0
    const fieldArray = [];
    for (let i = 0; i < totalCells; i++) {
        fieldArray.push(0);
    }
    // Counter for bombs placed 
    let bombsPlaced = 0;
    // Loop placing the bombs on the field according to input amount of bombs 
    while (bombsPlaced < bombsValue) {
        // Get random index in the array and make sure not to use the same index more then once
        let randomIndex = Math.floor(Math.random() * fieldArray.length);
        while (fieldArray[randomIndex] === '*') {
            randomIndex = Math.floor(Math.random() * fieldArray.length);
        }
        // Place * in the index chosen as a simble for bomb
        fieldArray[randomIndex] = '*';
        // Increas counter
        bombsPlaced++;
    }
    for (let i = 0; i < totalCells; i++) {
        if (fieldArray[i] === '*') continue;
        const isTopLine = i < widthValue;
        const isBottomLine = i > fieldArray.length - widthValue;
        const isRightLine = i % widthValue === widthValue - 1;
        const isLeftLine = i % widthValue === 0;

        if (fieldArray[i - 1] === '*' && !isLeftLine) fieldArray[i] += 1;
        if (fieldArray[i + 1] === '*' && !isRightLine) fieldArray[i] += 1;
        if (fieldArray[i - widthValue] === '*' && !isTopLine) fieldArray[i] += 1;
        if (fieldArray[i - widthValue + 1] === '*' && !isTopLine && !isRightLine) fieldArray[i] += 1;
        if (fieldArray[i - widthValue - 1] === '*' && !isTopLine && !isLeftLine) fieldArray[i] += 1;
        if (fieldArray[i + widthValue] === '*' && !isBottomLine) fieldArray[i] += 1;
        if (fieldArray[i + widthValue + 1] === '*' && !isBottomLine && !isRightLine) fieldArray[i] += 1;
        if (fieldArray[i + widthValue - 1] === '*' && !isBottomLine && !isLeftLine) fieldArray[i] += 1;
    }
    return fieldArray;
}
document.getElementById('start-button').addEventListener('click', startGame);