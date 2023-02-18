 document.getElementById('btn-calculate-rectangle').addEventListener('click', function(){
    const widthInput = inputValueById('width-input');
    const lengthInput = inputValueById('length-input');
    const total = widthInput * lengthInput;

   setTextElementById('area-rectangle', total);
})