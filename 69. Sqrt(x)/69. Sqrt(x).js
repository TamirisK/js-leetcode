var mySqrt = function(x) {
    return Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : parseInt(Math.sqrt(x)) 
};

console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(15)); // 3