const heightElement = document.getElementById('field-height');
const widthElement = document.getElementById('field-width');

function printSize(event) {
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
});
// totalCells is the size of the field - multipiction of the height and width
const totalCells = heightElement.value * widthElement.value;
// console.log(totalCells);    
// Creat the field as an array and make all it's values 0
const fieldArray = [];
for (let i = 0; i < totalCells; i++) {
    fieldArray.push(0);
}
console.log(fieldArray);


// Get the number of bombs from the input
const bombsNum = document.getElementById('total-bombs-num');
// Counter for bombs placed 
let bombsPlaced = 0;
// Loop placing the bombs on the field according to input amount of bombs 
while (bombsPlaced < bombsNum.value) {
    // Get random index in the array and make sure not to use the same index more then once
    let randomIndex = Math.floor(Math.random() * fieldArray.length);
    while (fieldArray[randomIndex] === '*') {
        randomIndex = Math.floor(Math.random() * fieldArray.length);
    }
    // Place * in the index chosen as a simble for bomb
    fieldArray[randomIndex] = '*';
    console.log(randomIndex);
    // Increas counter
    bombsPlaced++;
}
// Print the array/field
console.log(fieldArray);








/*const height = document.getElementById('field-height').value;
const width = document.getElementById('field-width').value;
console.log(height, width);

function setInputValue(fieldheight, height) {
    document.getElementById('field-height').setAttribute('value', height);
}

function setInputValue(fieldwidth, width) {
    document.getElementById('field-width').setAttribute('value', width);
}

function startGame(height, width) {
    const table = document.getElementById('field-table');
    for (let i = 0; i < width; i++) {
        const row = table.insertRow(i);
    }
    for (let i = 0; i < height; i++) {
        const cell = row.insertCell(i);
        cell.innerHTML = '<div class="field-cell-box"> </div>';
    }

}
document.getElementById('start-button').addEventListener('click', startGame);

function cellNumbers() {
    document.getElementsByClassName('field-data').innerHTML = '<div class="field-cell-box"> 1 </div>';
}

document.getElementsByClassName('field-data').addEventListener('click', cellNumbers);*/