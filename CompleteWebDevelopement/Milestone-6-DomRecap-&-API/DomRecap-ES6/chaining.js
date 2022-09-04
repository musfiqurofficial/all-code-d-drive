const user = [
    { id: 1, name: 'musfiq', address: 'Barisal' },
    { id: 2, name: 'Rahman', address: 'Jalokathi' },
    { id: 3, name: 'Fatema', address: 'Dhaka' },
]

console.log(user[2].name)


const user2 = {
    count: 5000,
    user2: [
        { id: 1, name: 'musfiq', address: 'Barisal' },
        { id: 2, name: 'Rahman', address: 'Jalokathi' },
        { id: 3, name: 'Fatema', address: 'Dhaka' },
    ]
}

console.log(user2.user2[2].address)



const adrs = {
    id: 180095,
    name: 'Musfiq',
    address: {
        street: {
            road: {
                home: {
                    riazVuiya: '102H',
                    floreNo: '2nd Flore'
                }
            },
            postOffice: 'airport Thana',
            city: 'Barisal'
        }
    }
}

console.log(adrs.address.street.postOffice)
console.log(adrs.address.street.road.home.floreNo)
console.log(adrs.address.street.road.bari?.floreNo)