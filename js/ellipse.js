document.getElementById('btn-ellipse').addEventListener('click', function(){
    const inputA = inputValueById('input-A');
    const inputB = inputValueById('input-B');
    const total = 3.14 * inputA * inputB;
    if(total){

    }
    else{
        alert('please enter amount');
        setTextElementById();
    }

    setTextElementById('area-ellipse', total);
})