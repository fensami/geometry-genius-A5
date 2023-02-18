 document.getElementById('btn-calculate-rectangle').addEventListener('click', function(){
    const wInput = inputValueById('w-input');
    const iInput = inputValueById('i-input');
    const total = wInput * iInput;

   const areaRectangle = document.getElementById('area-rectangle');
   areaRectangle.innerText = total;
    
})