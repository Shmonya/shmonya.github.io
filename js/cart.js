{
let calculate = document.getElementById("calculation");
let count = document.getElementById("buttonCountNumber");
calculation = document.getElementById("calculation").innerHTML;

document.getElementById("buttonCountPlus").onclick = function() {
  let countPlus = count.innerHTML;
  if(1){
    count.innerHTML++;
    let countPlus = count.innerHTML;
    calculate.innerHTML = calculations(countPlus) ;
  }
}

document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
    let countMinus = count.innerHTML;
    calculate.innerHTML = calculations(countMinus) ;
  }
}

calculations = (count) => {
  return (+count)*(+calculation);
}
}

{
let calculate = document.getElementById("calculation1");
let count = document.getElementById("buttonCountNumber1");
calculation = document.getElementById("calculation1").innerHTML;

document.getElementById("buttonCountPlus1").onclick = function() {
  let countPlus = count.innerHTML;
  if(1){
    count.innerHTML++;
    let countPlus = count.innerHTML;
    calculate.innerHTML = calculations(countPlus) ;
  }
}

document.getElementById("buttonCountMinus1").onclick = function() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
    let countMinus = count.innerHTML;
    calculate.innerHTML = calculations(countMinus) ;
  }
}

calculations = (count) => {
  return (+count)*(+calculation);
}
}