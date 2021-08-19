const buyPrice = document.querySelector("#buy-price")
const quantity = document.querySelector("#quantity")
const currentPrice = document.querySelector("#current-price")
const calculate = document.querySelector("#calculate")
const output = document.querySelector("#output")


calculate.addEventListener("click", () => {

    let buyPriceValue = Number(buyPrice.value)
    let currentPriceValue = Number(currentPrice.value)
    let quantityOfStocks = Number(quantity.value)


   let [data,color]= calculatePnL(buyPriceValue, quantityOfStocks, currentPriceValue)
    //console.log(calculatePnL()) This is executing loss statement twice irrespective of what Pnl is
    showOutput(data,color)

})

function calculatePnL(boughtPrice, boughtQuantity, curPrice) {

    let PnL;
    let color;


    if (curPrice > boughtPrice) {

        let profit = (curPrice - boughtPrice);
        let overallProfit = (curPrice - boughtPrice) * boughtQuantity;
        let profitPercentage=( (profit/boughtPrice)*100).toFixed(2);
        
        PnL = `The profit is of +${overallProfit} Rupees and the Percentage Gain is ${profitPercentage} %`
        color="green"
        //  output.innerHTML=PnL   --this was wrong cause there is no point of returning pnl if we have already showed it to the user the main functionality wa already finished better would have been if we have returned the output.innerhtml so as soon as the condition is fulfilled it would have stopped going to other branches and the best approach is what we have implemented is returning something from this and creating an output function to take parameter to show something and then calling this function in main clickhandler function passing its returned value to some variable and then passing that variable in showoutput function  
        return [PnL,color]
    } else if(boughtPrice>curPrice){
        let loss = (boughtPrice - curPrice) ;
        let overallLoss = (boughtPrice - curPrice) * boughtQuantity;
        let lossPercentage= ((loss/boughtPrice)*100).toFixed(2)
        PnL = `The loss is of -${overallLoss} Rupees and the Percentage Loss is ${lossPercentage} %. `
      //  output.innerHTML=PnL
      color="red"
        return [PnL,color]
    } else{
        PnL= `No Profit No Loss`
        color="brown"
       // return [PnL,color]  activating it was blocking last return value and the reason i svey simple that in the end there can be only one return statement so either use it in else one or out of of it  
    }

    return [PnL,color]
   // output.innerHTML=PnL


}

function showOutput(data,color){
    output.innerHTML=data;
    output.style.color=color;
}
//as output.innerhtml was reapeating so we extracted a function out of it and we returned some value from previous function so that we can use it for further process
//this function has nothing to do anything with previou sfunction and i sreusable anywhere if we want so try to have this approach everytime you can.