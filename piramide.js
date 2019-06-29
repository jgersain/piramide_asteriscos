
// for implementation
function buildPyramid(size){
    for (let symbol = 1; symbol < size; symbol++) {
        console.log("0".repeat(symbol));
    }
}

// while implementation
function buildPyramid2(size){
    let counter = 1;
    while (counter < size) {
        console.log("0".repeat(counter));
        counter++;
    }
}

// other implementation
function buildPyramid3(size) {
    let asterick = "*";
    for (let symbol = 1; symbol < size; symbol++) {
        console.log(asterick += "*");
    }
}

// buildPyramid(30);
// buildPyramid2(30);
// buildPyramid3(30);

data = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function playFizzBuzz(data) {
    for(let number of data) {
        if(number % 3 === 0 && number % 5 === 0) {
            console.log('FIZZBUZZ');
        } else if (number % 3 === 0) {
            console.log("FIZZ");
        } else if(number % 5 === 0) {
            console.log("BUZZ");
        }
    }
}

playFizzBuzz(data);


