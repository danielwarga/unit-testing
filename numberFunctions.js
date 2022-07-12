// Function that returns a the largest n umber

const getLargest = (a, b, c) => {
    return Math.max(a, b, c);
}

const getSmallest = (a, b, c) => {
    return Math.min(a, b, c);
}

console.log(getLargest(...[1, 2, 3]))
//Export the function so it's available to other files

module.exports = getLargest;
