
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

function buildPyramid3(size) {
    let asterick = "*";
    for (let symbol = 1; symbol < size; symbol++) {
        console.log(asterick += "*");
    }
}

// buildPyramid(30);
// buildPyramid2(30);
buildPyramid3(30);