/*
first 100 ---> 100tk
0 - 100 ---> 100tk
101 - 200 ---> 90tk
201+ ---> 70tk
*/

function ticketPrice(ticketQuntity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 70;
    if (ticketQuntity <= 100) {
        const price = ticketQuntity * first100Rate;
        return price;
    } else if (ticketQuntity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTickets = ticketQuntity - 100;
        const restPrice = restTickets * second100Rate;
        const totalPrice = first100Price + restPrice;
        return totalPrice;
    } else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTickets = ticketQuntity - 200;
        const restPrice = restTickets * restRate;
        const totalCost = first100Price + second100Price + restPrice;
        return totalCost;
    }
}
const price = ticketPrice(300);
console.log(price);