
const menesiai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];

// group by month
let accountByMonth = account.slice(0);
accountByMonth.sort(function(a,b) {return a.month - b.month});

// table content
const DOMcontent = document.querySelector('.table-content');

let HTMLrow = ``;
for (let i=0; i < account.length; i++) {
    let currentMonth = accountByMonth[i];
    if (!currentMonth.income) {currentMonth.income = 0};
    if (!currentMonth.expense) {currentMonth.expense = 0};
HTMLrow = `<div class="table-row">
                <div class="cell">${currentMonth.month}</div>
                <div class="cell">${menesiai[i]}</div>
                <div class="cell">${currentMonth.income}Eur</div>
                <div class="cell">${currentMonth.expense}Eur</div>
                <div class="cell">${currentMonth.income - currentMonth.expense}Eur</div>
            </div>`
DOMcontent.innerHTML += HTMLrow;
}

// footer content
const DOMfooter = document.querySelector('.table-footer');

let allExpenses = 0; 
let allIncome = 0;
for (let i=0; i < account.length; i++) {
    let currentMonth = accountByMonth[i];
    allExpenses += currentMonth.expense;
    allIncome += currentMonth.income;
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

let minIncome = {index: 0, value: Infinity};
let maxIncome = {index: 0, value: 0};
let minExpense = {index: 0, value: Infinity};
let maxExpense = {index: 0, value: 0};
for (let i=0; i < accountByMonth.length; i++) {
    let currentMonth = accountByMonth[i];
    const minIn = {index: 0, value: currentMonth.income};
    const maxIn = {index: 0, value: currentMonth.income};
    const minEx = {index: 0, value: currentMonth.expense};
    const maxEx = {index: 0, value: currentMonth.expense};
    if (minIn.value < minIncome.value && minIn.value !== 0) {
        minIncome.value = minIn.value;
        minIncome.index = i;
    }
    if (maxIn.value > maxIncome.value) {
        maxIncome.value = maxIn.value;
        maxIncome.index = i;
    }
    if (minEx.value < minExpense.value && minEx.value !==0) {
        minExpense.value = minEx.value;
        minExpense.index = i;
    }
    if (maxEx.value > maxExpense.value) {
        maxExpense.value = maxEx.value;
        maxExpense.index = i;
    }

DOMminIncome.innerHTML = menesiai[minIncome.index]+` `+'('+minIncome.value+' Eur'+')';
DOMmaxIncome.innerHTML = menesiai[maxIncome.index]+` `+'('+maxIncome.value+' Eur'+')';
DOMminExpense.innerHTML = menesiai[minExpense.index]+` `+'('+minExpense.value+' Eur'+')';
DOMmaxExpense.innerHTML = menesiai[maxExpense.index]+` `+'('+maxExpense.value+' Eur'+')';
}
