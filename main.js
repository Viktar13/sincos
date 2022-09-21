// alert("Hello");
const numA = document.querySelector('#numA');
const numB = document.querySelector('#numB');
const result = document.querySelector('#output');
const inputs = document.querySelectorAll('input');


const radioAction = document.querySelectorAll('input.sin_cos');
console.log(radioAction[1]);
// const plus = document.querySelector('#plus');


// const radioCinCos = document.querySelectorAll('input[name="coss"]')
// console.log(radioCinCos);

numA.addEventListener("input", function(){
    console.log(numA.value);
})

numB.addEventListener("input", function () {
    
    console.log(numB.value);
})

function calculate (){
    let totalResult = 0;
    if (plus.checked){
        totalResult = Number(numA.value) + Number(numB.value);
    }
    if (subtraction.checked){
        totalResult = Number(numA.value) - Number(numB.value);
    }
    if (multiplication.checked) {
        totalResult = Number(numA.value) * Number(numB.value);
    } 
    if (division.checked){
        totalResult = Number(numA.value) / Number(numB.value);
    }



    // let totalResult = Number(numA.value) + Number(numB.value);
    // console.log(totalResult);

    // for (const action of radioAction) {
    //     if (action.checked) {
    //         console.log("kfkgkreg");
    //     }
    // }

    result.innerText = totalResult;
}

calculate();



for (const input of inputs) {
    input.addEventListener("input", function () {
        calculate();
    })
}


//
// sumAB.addEventListener("output", function () {
//     return sumAB.value === numA.value + numB.value;
// })







// sumAB.value = firstNum.value + secondNum.value;
 
// const radioPlus = documen.querySelector()
// const radioSubstraction
// const radioMultiplication
// conct radioDivision

// sumAB = firstNum + secondNum;

// firstNum.addEventListener

// function calculate() {
//     console.log("firstNum");
// }

// calculate();

// console.log("firstNum");


// console.log("firstNum");
