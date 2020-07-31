const day = require('./day.js');

const dayString = day.toString();


const period = function(arr) {
    
    let result = []

    
    for (let i = 0; i < day.length; i++) {
        
        result.push(dayString.split(","))
        
        console.log(result[i]);
    }
    return result;
}

setInterval(function, 1000);

