function RectangleArea(length, width) {
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        return;
    }
    return (length * width);
};

function RectanglePerimeter(length, width) {
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        return;
    }
    return (length + width) * 2
}

function CircleArea(radius) {
    if (isNaN(radius) || radius <= 0) {
        return;
    }
    return Math.PI * radius * radius;
}

function circleCircumference(radius) {
    if (isNaN(radius) || radius <= 0) {
        return;
    }
    return Math.PI * radius * 2;
}
let rectangleArearesult = RectangleArea(3, 4);
let rectanglePerimeterresult = RectanglePerimeter(3, 4);
let circleArearesult = CircleArea(2);
let circleCircumferenceresult = circleCircumference(3);
console.log(`RectangleArea: ${rectangleArearesult}`);
console.log(`RectanglePerimeter: ${rectanglePerimeterresult}`);
console.log(`CircleArea: ${circleArearesult}`);
console.log(`circleCircumference: ${circleCircumferenceresult}`);