 document.getElementById('btn-calculate-rectangle').addEventListener('click', function(){
    const widthInput = inputValueById('width-input');
    const lengthInput = inputValueById('length-input');
    const total = widthInput * lengthInput;
    if(total){

    }
    else{
        alert('please enter amount');
        setTextElementById();
    }

   setTextElementById('area-rectangle', total);
})