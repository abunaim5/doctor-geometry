function calculateRhombusArea() {
    const rhombusD1 = getInputValueById('rhombus-d1');
    const rhombusD2 = getInputValueById('rhombus-d2');
    const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
    setInnerTextById('rhombus-area', rhombusArea);
}