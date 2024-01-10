
function getNumI() {
    for (let x = 1; x <= 100; x++) {
        console.log(x);
    }
}

function getNumD() {
    for (let x = 100; x >= 1; x--) {
        console.log(x);
    }
}

function whileLoop() {
    let x = 0;
    while (x <= 5) {
        console.log("Vraj");
        x++;
    }
}

function doWhileLoop() {
    let x = 2;
    do {
        console.log("Patel");
        x++;
    } while (x <= 1)
}

let sibling = ['Yogi', 'Vraj', 'Nidhi', 'Nil'];

function forIn() {
    for (let n in sibling) {
        console.log("n =", n);
    }
}

function forOf() {
    for (let n of sibling) {
        console.log("n =", n);
    }
}

//==========================================================================================================
// Additional Practice of loops :-

let topic = ["Intro", "Variable", "DataTypes", "Operators", "Conditional Statement", "Loops"];

function forIn1(){
    

    for(let x in topic){
        console.log(x);
        console.log(topic[x]);
    }
}

function forOf1(){
    
    for(let y of topic){
        console.log(y);
    }

    let subtopic = 'InfiniteLoop'

    for(let z of subtopic){
        console.log(z);
    }
}