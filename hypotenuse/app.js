const intputs=document.querySelectorAll(".input")

const calculate=document.querySelector("#calculate")
const output=document.querySelector("#output");

calculate.addEventListener("click",()=>{

    let intputLengthValue=Number(intputs[0].value)
    let intputBreadthValue=Number(intputs[1].value)


    let result =   calculateHypotenuse(intputLengthValue,intputBreadthValue)
 
    showOutput(result);


})

function calculateHypotenuse(a,b){
 const sumOfSquares =calculateSumOfSquares(a,b)
let hypotenuse= Math.sqrt(sumOfSquares)
console.log(hypotenuse)
}

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b
    return sumOfSquares
}

function showOutput(data) {
    output.innerText = data
}