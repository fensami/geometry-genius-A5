document.getElementById('btn-pentagon').addEventListener('click', function(){
    const pentagonInput = inputValueById('pentagon-input');
    const pentagonBaseInput = inputValueById('pentagon-base-input');
    const total = 0.5 * pentagonInput * pentagonBaseInput;

    setTextElementById('area-pentagon', total)
})