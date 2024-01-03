function forIn(){
    let topic = ["Intro", "Variable", "DataTypes", "Operators", "Conditional Statement", "Loops"];

    for(let x in topic){
        console.log(x);
        console.log(topic[x]);
    }
}

function forOf(){
    let topic = ["Intro", "Variable", "DataTypes", "Operators", "Conditional Statement", "Loops"];
    
    for(let y of topic){
        console.log(y);
    }

    let subtopic = 'InfiniteLoop'

    for(let z of subtopic){
        console.log(z);
    }
}