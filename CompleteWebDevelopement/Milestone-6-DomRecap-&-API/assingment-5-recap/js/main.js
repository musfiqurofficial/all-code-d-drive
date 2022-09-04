document.getElementById("calculate-btn").addEventListener("click", function () {
    const playerInputFields = document.getElementById("player-field");
    const playerInputField = playerInputFields.value;

    const playerCost = playerInputField * liArray.length;
    const playerTotalCost = document.getElementById("player-cost").innerHTML = playerCost;



    document.getElementById("total-calculate-btn").addEventListener("click", function () {
        const managerFees = document.getElementById("manager-fee-field");
        const managerFeeString = managerFees.value;
        const managerFee = parseInt(managerFeeString);
        const coachFees = document.getElementById("coach-fee-field");
        const coachFeeString = coachFees.value;
        const coachFee = parseInt(coachFeeString);
        const totalCost = playerCost + managerFee + coachFee;
        document.getElementById("total-cost").innerHTML = totalCost;

        // managerFees.value = '';
        // coachFees.value = '';
    })
    playerInputFields.value = '';
})









function cardfun(name, img) {
    const cardObj = {
        name: name,
        img: img
    }
    return cardObj;
}



function cardCreate(nam) {
    const cardDynamic = document.getElementById('card-dynamic');

    for (const name of nam) {
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `
        <div class=" card">
            <img src="/images/Mashrafe-Mortaza.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name.name}</h5>
                <p class="card-text">Mashrafe Bin Mortaza is a Bangladeshi international cricketer and politi.....<small class="text-warning">Read More</small></p>
                <button id="my-btn" href="#" class="btn btn-primary w-100 py-2 fw-semibold my-btn-class">SELECT</button>
            </div>
        </div>
    `;
        cardDynamic.appendChild(div);
    }
}

cardCreate('musfiq');
