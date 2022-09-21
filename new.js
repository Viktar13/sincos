const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector("#square-range");
const inputs = document.querySelectorAll('input');

const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');


const ceiling = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');



const basePrice = 6000;
const totalPriceElement = document.querySelector('#total-price');


squareRange.addEventListener('input', function () {
    // console.log('Input!!!');
    squareInput.value = squareRange.value;
});

squareInput.addEventListener('input', function () {
    squareRange.value = squareInput.value;
})

console.log(floor);
console.log(walls);
console.log(ceiling);

function calculate() {

    let totalPrice = basePrice * parseInt(squareInput.value);    

    for(const radio of radioType) {
        if(radio.checked) {
            totalPrice = totalPrice * Number(radio.value);
        }
    } 

    for(const radio of radioBuilding) {
        if(radio.checked) {
            totalPrice = totalPrice * Number(radio.value);
        }
    }

    for(const radio of radioRooms) {
        if(radio.checked) {
            totalPrice = totalPrice * Number(radio.value);
        }
    }

    if (ceiling.checked) {
        totalPrice = totalPrice * Number(ceiling.value);
    }

    if (walls.checked) {
        totalPrice = totalPrice * Number(walls.value);
    }

    if (floor.checked) {
        totalPrice = totalPrice * Number(floor.value);
    }

    const formatter = new Intl.NumberFormat('by');
    totalPriceElement.innerText = formatter.format(totalPrice);
}

calculate();


for (const input of inputs) {
    input.addEventListener('input', function () {
        calculate();

    })
}




