// // let name = 'Hello World';
// // console.log(name);

// // const student = {
// //     name: 'John',
// //     age: 30,
// //     isMarried: false,
// //     studyTime: function (time) {
// //         console.log(`${this.name} is studying ${time}`);
// //     }
// // }
// // console.log(document.getElementsByTagName('body')[0]);

// const liCollection = document.getElementsByTagName('li');
// // console.log(liCollection);
// for (const li of liCollection) {
//     console.log(li.innerText);
// }

// const allHeadings = document.getElementsByTagName('h1');

// for (const h1 of allHeadings) {
//     console.log(h1.innerText);
// }

// console.log(document.getElementById('myPhone').innerText)

// const phones = document.getElementsByClassName('importent-phone');
// for (const phone of phones) {
//     console.log(phone.innerText);
// }

let headerElement = document.getElementById('head');
headerElement.style.fontSize = '50px ';

const mains = document.querySelectorAll('main');
for (const main of mains) {
    main.style.backgroundColor = 'black';
    main.style.color = 'white';
    main.style.border = '10px solid red';
    main.style.borderRadius = '30px';
    main.style.padding = '50px';
    main.style.margin = '50px';
}

const placesContainer = document.getElementById('places-container');

placesContainer.style.backgroundColor = 'yellow';

const placesUl = document.querySelector('#places-container ul');

let li = document.createElement('li');

li.innerText = 'Biday Infra';

placesUl.appendChild(li);

placesUl.parentNode
placesUl.parentElement

const placesContainers = document.getElementById('places-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Favorate Places';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Kuakata';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Bandarban';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Cox-Bazzar';
ul.appendChild(li3);
const li4 = document.createElement('li');
li4.innerText = 'Sajek Velly';
ul.appendChild(li4);
section.appendChild(ul);

placesContainers.appendChild(section);