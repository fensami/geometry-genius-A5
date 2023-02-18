//funtion --1
function inputValueById(element){
    const input = document.getElementById(element);
    const inputString = input.value;
    const inputNumber = parseFloat(inputString);
    return inputNumber;
    

}

//funtion --2
function setTextElementById(elementId , value){
    const textArea =document.getElementById(elementId);
    textArea.innerText =value
}