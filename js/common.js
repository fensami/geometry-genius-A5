function inputValueById(input){
    const bInput = document.getElementById(input);
    const bInputString = bInput.value;
    const bInputNumber = parseFloat(bInputString);
    return bInputNumber;

}