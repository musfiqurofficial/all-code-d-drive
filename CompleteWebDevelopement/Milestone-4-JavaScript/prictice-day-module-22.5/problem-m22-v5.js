/*
const chairWood = 12;
const tableWood = 2;
const bedWood = 3;
*/

function woodCalculator(chair, table, bed) {
    const perchairWood = 5;
    const pertableWood = 20;
    const perbedWood = 30;

    const chairWood = chair * perchairWood;
    const tableWood = table * pertableWood;
    const bedWood = bed * perbedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(12, 2, 3);
console.log(totalWood);