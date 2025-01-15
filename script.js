let addButton = document.getElementById("add");
let subtractButton = document.getElementById("substract");
let divideButton = document.getElementById("divide");
let multiplyButton = document.getElementById("multiply");

function add(){

    let result = Number(document.getElementById("number1").value) + Number(document.getElementById("number2").value);
    alert("The result is " + result)
}

function minus(){

    let result = Number(document.getElementById("number1").value) - Number(document.getElementById("number2").value);
    alert("The result is " + result)
}

function multiply(){

    let result = Number(document.getElementById("number1").value) * Number(document.getElementById("number2").value);
    alert("The result is " + result)
}

function divide(){

    if (Number(document.getElementById("number2").value) === 0) {
        alert("You cannot divide by zero")
    }
    else {
        let result = Number(document.getElementById("number1").value) / Number(document.getElementById("number2").value);
        alert("The result is " + result)
    }
}

addButton.addEventListener("click", add)
subtractButton.addEventListener("click", minus)
multiplyButton.addEventListener("click", multiply)
divideButton.addEventListener("click", divide)
