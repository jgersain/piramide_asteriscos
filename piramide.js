
// for implementation
function buildPyramid(size){
    for (let symbol = 0; symbol < size; symbol++) {
        console.log("0".repeat(symbol));
    }
}

// while implementation
function buildPyramid2(size){
    let counter = 0;
    while (counter < size) {
        console.log("0".repeat(counter));
        counter++;
    }
}

buildPyramid(30);
buildPyramid2(30);