document.getElementById('btn-rhombus').addEventListener('click', function(){
    const rhombusDiagonalOne = inputValueById('rhombus-diagonal-1');
    const rhombusDiagonalTwo = inputValueById('rhombus-diagonal-2');
    const total =0.5 * rhombusDiagonalOne * rhombusDiagonalTwo;
    
    setTextElementById('area-rhombus', total.toFixed(2));
})