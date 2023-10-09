function add(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return;
    }
    return x + y;
}

const subtract = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        return;
    }
    return x - y;
};

const multiply = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        return;
    }
    return x * y;
};
const division = function(x, y) {
    if (isNaN(x) || isNaN(y) || y == 0) {
        return `Invalid data try again`;
    }
    return x / y;
};

console.log(`added result: ${add(80, 20)}; 
  subtracted result: ${subtract(80, 20)};
  multiplied result: ${multiply(80, 20)}; 
  divided result: ${division(80,20)}`);