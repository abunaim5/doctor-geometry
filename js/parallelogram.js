function calculateParallelogramArea() {
    const parallelogramBase = getInputValueById('parallelogram-base');
    const parallelogramHeight = getInputValueById('parallelogram-height');
    const parallelogramArea = parallelogramBase * parallelogramHeight;
    setInnerTextById('parallelogram-area', parallelogramArea);
}