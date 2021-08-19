const intputs = document.querySelectorAll(".input");
const calculate = document.querySelector("#calculate");
const output = document.querySelector("#output");

calculate.addEventListener("click", () => {

    let intputLengthValue = Number(intputs[0].value);
    let intputBreadthValue = Number(intputs[1].value);


    let result = calculateArea(intputLengthValue, intputBreadthValue);
    showOutput(result);

})
function calculateArea(a, b) {
    const multiplicationOfNumbers = calculateMultiplicationOfTwoNumbers(a, b);
    const area = 1 / 2 * (multiplicationOfNumbers);
    return area;

}

function calculateMultiplicationOfTwoNumbers(a, b) {

    const multiplicationOfNumbers = a * b;
    return multiplicationOfNumbers
}

function showOutput(data) {
    output.innerText = data
}