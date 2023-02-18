document.getElementById('btn-ellipse').addEventListener('click', function(){
    const inputA = inputValueById('input-A');
    const inputB = inputValueById('input-B');
    const total = 3.14 * inputA * inputB;
   

    setTextElementById('area-ellipse', total.toFixed(2));
})