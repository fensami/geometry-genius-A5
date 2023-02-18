document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const baseParallelogram = inputValueById('base-parallelogram');
    const heightParallelogram = inputValueById('height-parallelogram');
    const total = baseParallelogram * heightParallelogram;
    if(total){

    }
    else{
        alert('please enter amount');
        setTextElementById();
    }

    setTextElementById('area-parallelogram', total);
})