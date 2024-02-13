function calculateEllipseArea() {
    const ellipseMajor = getInputValueById('ellipse-major');
    const ellipseMinor = getInputValueById('ellipse-minor');
    const ellipseArea = 3.14159 * ellipseMajor * ellipseMinor;
    setInnerTextById('ellipse-area', ellipseArea);
}