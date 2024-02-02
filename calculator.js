function add(a, b){
    console.log("Sum of "+a + " and " +b + " is : " + (a+b))
}

function subract(a, b){
    console.log("Difference of "+a + " and " +b + " is : " + (a-b))
}

function multiply(a, b){
    console.log("Multiplication of "+a + " and " +b + " is : " + (a*b))
}

function divide(a, b){
    console.log("Sum of "+a + " and " +b + " is : " + (a/b))
}


module.exports={
    addition : add,
    subtraction : subract,
    multiplication : multiply,
    division : divide
}