document.getElementById('btn-calculate-triangle').addEventListener('click', function(){
    
    const baseInput = inputValueById('base-input');
    const heightInput = inputValueById('height-input');
    const total = 0.5 * baseInput * heightInput;
    if(total){
        
    }
    else{
        alert('please enter amount')
    }

    const areaTriangle =document.getElementById('area-triangle');
    // const areaTriangleString = areaTriangle.innerText;
    areaTriangle.innerText = total;


})