function alphabetizeString(str) {
    return str.split('').sort().join('');
}

// Example usage
let example = 'webmaster';
console.log(alphabetizeString(example)); // Output: 'abeemrstw'
