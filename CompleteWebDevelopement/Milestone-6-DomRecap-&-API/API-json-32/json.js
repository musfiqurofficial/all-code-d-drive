// JSON.stringify object ke strign e convert kore
// JSON.parse stringify object ke purnoray object a rupantor kore

const user = { id: 01, name: 'Musfiqur Rahman', job: 'Web Developer' };

const stringified = JSON.stringify(user);

const shop = {
    owner: 'Fatema',
    address: {
        street: 'Jalokathi Bazzer',
        city: 'Jalokathi',
        country: 'Bangladesh'
    },
    product: ['leptop', 'monitor', 'keyborad', 'mouse', 'phone'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}

console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopOBJ = JSON.parse(shopJSON);
console.log(shopOBJ);

