// Function that returns a the largest n umber

const getLargest = (a, b, c) => {
    if (a && b && c) {
        return Math.max(a, b, c);
    } else {
        throw'Error: all inputs must have a value.';
    }
}

const getSmallest = (a, b, c) => {
    if (a && b && c) {
        return Math.min(a, b, c);
    } else {
        throw'Error: all inputs must have a value.';
    }
}

console.log(getLargest(...[1, 2, 3]))
//Export the function so it's available to other files

module.exports = {
    getLargest,
    getSmallest
}
