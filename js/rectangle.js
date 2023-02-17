function inputValueById(input){
    const bInput = document.getElementById(input);
    const bInputString = bInput.value;
    const bInputNumber = parseFloat(bInputString);
    return bInputNumber;

}

document.getElementById('btn-calculate-rectangle').addEventListener('click', function(){
    
    const bInput = inputValueById('b-input');
    const hInput = inputValueById('h-input');
    const total = 0.5 * bInput * hInput;

    const areaTriangle =document.getElementById('area-triangle');
    // const areaTriangleString = areaTriangle.innerText;
    areaTriangle.innerText = total;


})