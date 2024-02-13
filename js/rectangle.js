function calculateRectangleArea() {
    const rectangleLength = getInputValueById('rectangle-length');
    const rectangleWidth = getInputValueById('rectangle-width');
    const rectangleArea = rectangleLength * rectangleWidth;
    setInnerTextById('rectangle-area', rectangleArea);
}