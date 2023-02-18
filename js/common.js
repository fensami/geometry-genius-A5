//funtion --1
function inputValueById(input){
    const bInput = document.getElementById(input);
    const bInputString = bInput.value;
    const bInputNumber = parseFloat(bInputString);
    return bInputNumber;

}


//funtion --2
function setTextElementById(elementId , value){
    const areaTriangle =document.getElementById(elementId);
    areaTriangle.innerText =value
}