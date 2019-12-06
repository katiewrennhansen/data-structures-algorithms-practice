//Counting Sheep
function sheep(num){
    if(num === 0){
        console.log('All sheep jumped over the fence');
        return;
    }
    console.log('Another sheep jumped over the fence');
    sheep(num - 1);
}


//Power Calculator
function powerCalculator(base, exp){
    if(exp < 0){
        return 'exp needs to be greater than 0';
    }
    if(exp === 0){
        return 1
    }
    if(exp === 1){
        return base
    }
    return base * powerCalculator(base, exp - 1);
}


//Reverse String
function reverseString(str){
    if(str.length === 0){
        return str
    }
    return reverseString(str.slice(1)) + str.slice()[0];
}


//nth Triangular Number
function triangularNumber(n){
    if(n === 0){
        return 0
    }
    if(n === 1){
        return 1
    }
    return n + triangularNumber(n - 1)
}


//String Splitter
function stringSplitter(str){
    if(str.length === 0){
        return 0;
    }
    let remove = str.indexOf('/')
    if(remove === -1){
        return [str]
    }
    return [str.slice(0, remove), ...stringSplitter(str.slice(remove + 1))];
}


//Fibonacci
function fibonacci(initialValue, finalValue){
    if(finalValue > 100){
        return [];
    }
    if(!finalValue){
        finalValue = initialValue
    }
    newNum = initialValue + finalValue
    return [finalValue, ...fibonacci(finalValue, newNum)] 
}


//Factorial
function factorial(num){
    if(num === 0){
        return 1
    }
    if(num === 1){
        return 1
    }
    secondNum = num - 1
    return num * secondNum * factorial(secondNum - 1)
}


//Find a way out of the maze
function maze(){
    
}