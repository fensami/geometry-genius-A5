document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const baseParallelogram = inputValueById('base-parallelogram');
    const heightParallelogram = inputValueById('height-parallelogram');
    const total = baseParallelogram * heightParallelogram;
    

    setTextElementById('area-parallelogram', total.toFixed(2));
})