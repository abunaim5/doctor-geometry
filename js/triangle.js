function calculateTriangleArea() {
    const triangleBase = getInputValueById('triangle-base');
    const triangleHeight = getInputValueById('triangle-height')
    const triangleArea = 0.5 * triangleBase * triangleHeight;
    console.log(triangleArea);
}