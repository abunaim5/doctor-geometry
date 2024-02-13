function getInputValueById(inputId) {
    const getInput = document.getElementById(inputId);
    const getInputStrValue = getInput.value;
    const convertStrValueToNumber = parseFloat(getInputStrValue);
    return convertStrValueToNumber;
}