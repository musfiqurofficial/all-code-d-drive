document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeField = document.getElementById('income-field');
    const income = parseInt(incomeField.value);
    const foodField = document.getElementById('food-field');
    const food = parseInt(foodField.value);
    const rentField = document.getElementById('rent-field');
    const rent = parseInt(rentField.value);
    const clothesField = document.getElementById('clothes-field');
    const clothes = parseInt(clothesField.value);
    const totalExpenese = food + rent + clothes;
    const addCostField = income - (food + rent + clothes);
    document.getElementById('total-expenses').innerHTML = totalExpenese;
    document.getElementById('total-balance').innerHTML = addCostField;
})

document.getElementById('save-amount-btn').addEventListener('click', function () {
    const parsentField = document.getElementById('parsent-field');
    const parsent = parseInt(parsentField.value);
    const addCostField = document.getElementById('total-balance');
    const balance = parseInt(addCostField);
    const saveAmountCalculate = balance * parsent;

    document.getElementById('remaining-balance').innerHTML = saveAmountCalculate;

})