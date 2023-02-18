document.getElementById('btn-calculate-triangle').addEventListener('click', function(){
    
    const baseInput = inputValueById('base-input');
    const heightInput = inputValueById('height-input');
    const total = 0.5 * baseInput * heightInput;
    if(total){
        

    }
    else{
        alert('please enter amount');
        setTextElementById();
    }
    
    setTextElementById('area-triangle', total);
})