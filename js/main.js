const menesiai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];

// group by month
let accountByMonth = account.slice(0);
accountByMonth.sort(function(a,b) {return a.month - b.month});

// table content
const DOMcontent = document.querySelector('.table-content');

let HTMLrow = ``;
for (let i=0; i < account.length; i++) {
    if (!accountByMonth[i].income) {accountByMonth[i].income = 0};
    if (!accountByMonth[i].expense) {accountByMonth[i].expense = 0};
HTMLrow = `<div class="table-row">
                <div class="cell">${accountByMonth[i].month}</div>
                <div class="cell">${menesiai[i]}</div>
                <div class="cell">${accountByMonth[i].income}Eur</div>
                <div class="cell">${accountByMonth[i].expense}Eur</div>
                <div class="cell">${accountByMonth[i].income - accountByMonth[i].expense}Eur</div>
            </div>`
DOMcontent.innerHTML += HTMLrow;
}

// footer content
const DOMfooter = document.querySelector('.table-footer');

let allExpenses = 0; 
let allIncome = 0;
for (let i=0; i < account.length; i++) {
allExpenses += accountByMonth[i].expense;
allIncome += accountByMonth[i].income;
let money = allIncome - allExpenses;
let HTMLfooter = ``;
HTMLfooter = `<div class="cell"></div>
        <div class="cell"></div>
        <div class="cell">${allIncome} Eur</div>
        <div class="cell">${allExpenses} Eur</div>
        <div class="cell">${money} Eur</div>`
DOMfooter.innerHTML = HTMLfooter;
}

// summary content
const DOMminIncome = document.querySelector(`#minIncome`);
const DOMmaxIncome = document.querySelector(`#maxIncome`);
const DOMminExpense = document.querySelector(`#minExpense`);
const DOMmaxExpense = document.querySelector(`#maxExpense`);

let minIncome = Infinity;
let maxIncome = 0;
let minExpense = Infinity;
let maxExpense = 0;
for (let i=0; i < accountByMonth.length; i++) {
    const minIn = accountByMonth[i].income;
    const maxIn = accountByMonth[i].income;
    const minEx = accountByMonth[i].expense;
    const maxEx = accountByMonth[i].expense;
    if (minIn < minIncome && minIn !== 0) {
        minIncome = minIn;
    }
    if (maxIn > maxIncome) {
        maxIncome = maxIn;
    }
    if (minEx < minExpense && minEx !==0) {
        minExpense = minEx;
    }
    if (maxEx > maxExpense) {
        maxExpense = maxEx;
    }
}
DOMminIncome.innerHTML += ` `+'('+minIncome+')';
DOMmaxIncome.innerHTML += ` `+'('+maxIncome+')';
DOMminExpense.innerHTML += ` `+'('+minExpense+')';
DOMmaxExpense.innerHTML += ` `+'('+maxExpense+')';