var itemsList=document.querySelector('#items');
itemsList.parentElement.style.backgroundColor='grey';

itemsList.firstChild.style.color='red';
itemsList.firstElementChild.textContent='helo1';
itemsList.lastElementChild.textContent='helo4';
console.log(itemsList.nextSibling);
console.log(itemsList.nextElementSibling);
console.log(itemsList.previousSibling);
console.log(itemsList.previousElementSibling);

var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');


var newDivText=document.createTextNode('Helloworld');
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(newDiv,h1);

var container1=document.querySelector('items .container');
var h1=document.querySelector('items li');

container.insertBefore(newDiv,li);
