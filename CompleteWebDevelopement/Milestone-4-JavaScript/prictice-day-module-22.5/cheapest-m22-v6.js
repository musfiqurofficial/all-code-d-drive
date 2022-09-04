const phones = [
    {
        name: 'iPhone X',
        camara: 12,
        screen: 'OLED',
        battery: '12 hours',
        prosessor: 'A16 Bionic',
        memory: '256GB',
        description: 'Face ID',
        price: $999,
    },
    {
        name: 'Samsung',
        camara: 120,
        screen: 'AMOLED',
        battery: '12 hours',
        prosessor: 'Snapdrigon 888',
        memory: '256GB',
        description: 'Face ID, Fingerprint',
        price: $899,
    },
    {
        name: 'OnePlus',
        camara: 64,
        screen: 'OLED',
        battery: '12 hours',
        prosessor: 'Snapdrigon 888',
        memory: '256GB',
        description: 'Face ID, Fingerprint',
        price: $599,
    },
    {
        name: 'Huawei',
        camara: 120,
        screen: 'OLED',
        battery: '12 hours',
        prosessor: 'Helio G95T',
        memory: '256GB',
        description: 'Face ID, Fingerprint',
        price: $799,
    },
    {
        name: 'Walton',
        camara: 30,
        screen: 'LED',
        battery: '12 hours',
        prosessor: 'Walton',
        memory: '64GB',
        description: 'Face ID, Fingerprint',
        price: $199,
    }
];

// function cheapestPhone(phones) {
//     let cheapest = phones[0];
//     for (i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         if (phone.price < cheapest.price) {
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }
// const mySelection = cheapestPhone(phones);
// console.log(mySelection);

// function cheapestPhone(phones) {
//     let cheapest = phones[0];
//     for (i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         if (phone.camara < cheapest.camara) {
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }
// const mySelection = cheapestPhone(phones);
// console.log(mySelection);