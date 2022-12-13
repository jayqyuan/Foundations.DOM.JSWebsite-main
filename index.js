let h1Ele = document.createElement('h1');//✅console.log(h1Ele);
let div1Ele = document.createElement('div');
let divEle = document.createElement('div');
let divBaby2 = document.createElement('div');
let divBaby3 = document.createElement('div');
let divBaby4 = document.createElement('div');
div1Ele.className = 'master-div';
h1Ele.innerHTML = 'Math Study Cards';//✅console.log(h1Ele);
divEle.innerHTML = 'addition problem';
divBaby2.innerHTML = 'subtraction problem';
divBaby3.innerHTML = 'second addition problem';
divBaby4.innerHTML = 'multiplication problem';
document.getElementById('math-cards').appendChild(h1Ele);
document.getElementById('math-cards').appendChild(div1Ele);
//document.body.appendChild(divEle);//✅ BUT the div is below all three sections
//document.body.('master-div').appendChild(divEle); //this code kills e'rybody...
document.querySelector('.master-div').appendChild(divEle);
document.querySelector('.master-div').appendChild(divBaby2);
document.querySelector('.master-div').appendChild(divBaby3);
document.querySelector('.master-div').appendChild(divBaby4);

document.body.querySelector('h1').style.borderBottomColor = 'black';
document.body.querySelector('h1').style.borderBottomWidth = '10px';

document.body.querySelector('div').style.backgroundColor='#656565';
