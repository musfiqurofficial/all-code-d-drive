function btn() {
    const btnContainer = document.getElementById('btn-container');
    const btnTag = document.createElement('div');
    btnTag.classList.add('btnTag');
    btnTag.innerHTML = `
    <button>sdfgsard</button>
    `
    btnContainer.appendChild(btnTag);
    return btnTag;
}
btn();
btn();
btn();


// function obj(p, x) {
//     const user = {
//         id: 1, name: p, address: x
//     }
//     return user;
// }
// const objj = obj('musfiq', 'Borisal')

// console.log(objj)