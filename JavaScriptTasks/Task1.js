function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

// Example usage
let x = 32243;
console.log(reverseNumber(x)); // Output: 34223
