const menesiai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];

// group by month
let accountByMonth = account.slice(0);
accountByMonth.sort(function(a,b) {return a.month - b.month});


const DOMcontent = document.querySelector('.table-content');

for (let i=0; i < account.length; i++) {
    if (!accountByMonth[i].income) {accountByMonth[i].income = 0};
    if (!accountByMonth[i].expense) {accountByMonth[i].expense = 0};
let HTMLrow = ``;
HTMLrow = `<div class="table-row">
                <div class="cell">${accountByMonth[i].month}</div>
                <div class="cell">${menesiai[i]}</div>
                <div class="cell">${accountByMonth[i].income}Eur</div>
                <div class="cell">${accountByMonth[i].expense}Eur</div>
                <div class="cell">${accountByMonth[i].income - accountByMonth[i].expense}Eur</div>
            </div>`
DOMcontent.innerHTML += HTMLrow;
}

const DOMfooter = document.querySelector('.table-footer');

let islaidos = 0; 
let pajamos = 0;
for (let i=0; i < account.length; i++) {
islaidos += accountByMonth[i].expense;
pajamos += accountByMonth[i].income;
let bendra = pajamos - islaidos;
let HTMLfooter = ``;
HTMLfooter = `<div class="cell"></div>
        <div class="cell"></div>
        <div class="cell">${pajamos} Eur</div>
        <div class="cell">${islaidos} Eur</div>
        <div class="cell">${bendra} Eur</div>`
DOMfooter.innerHTML = HTMLfooter;
}

const DOMminIncome = document.querySelector(`#minIncome`);
const DOMmaxIncome = document.querySelector(`#maxIncome`);
const DOMminExpense = document.querySelector(`#minExpense`);
const DOMmaxExpense = document.querySelector(`#maxExpense`);

let minIncome = Infinity;
let maxIncome = -Infinity;
let minExpense = 1;
let maxExpense = 1;

for (let i=0; i < account.length; i++) {
    if (minIncome < account[i].income) {
        account[i].income = minIncome;
    }
    if (maxIncome > account[i].income) {
        account[i].income = maxIncome;
    }
}
