// Get inputs value
function getInputValueById(inputId) {
    const getInput = document.getElementById(inputId);
    const getInputStrValue = getInput.value;
    const convertStrValueToNumber = parseFloat(getInputStrValue);
    return convertStrValueToNumber;
}
// Set elements inner text
function setInnerTextById(elementId, area) {
    const getElement = document.getElementById(elementId);
    console.log(getElement);
    const setInnerText = getElement.innerText = area;
    return setInnerText;
}