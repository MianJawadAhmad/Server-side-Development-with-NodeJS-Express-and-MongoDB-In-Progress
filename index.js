var rect = require('./rectangle');


// var rect ={
//     parimeter: (x,y) => (2*(x+y)),
//     area: (x,y) => (x*y)
// };

function solveRect(l,b){
    console.log('solving for rectingal where l = '+l+'and b = '+b);
    if(l <= 0 || b <= 0){
        console.log("Rectangle dimensions should be grater than zero: l = "+ l +", and b = "+b);
    }else{
        console.log('The area of the rectangle is '+ rect.area(l,b));
        console.log('The Parimeter of the rectangle is'+ rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(0,5);
solveRect(-3,5);