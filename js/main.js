const menesiai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];
console.log(menesiai);

const lentele = document.querySelector('.table-content');

const footer = document.querySelector('.table-footer');

for (let i=0; i < account.length; i++) {
let HTMLrow = ``;
HTMLrow = `<div class="table-row">
                <div class="cell">${account[i].month}</div>
                <div class="cell">${menesiai[i]}</div>
                <div class="cell">${account[i].income}Eur</div>
                <div class="cell">${account[i].expense}Eur</div>
                <div class="cell">${account[i].income - account[i].expense}Eur</div>
            </div>`
lentele.innerHTML += HTMLrow;
}

for (let i=0; i < account[i].length; i++) {
let HTMLfooter = ``;
let islaidos = 0;
let pajamos = 0;
let bendra = 0;
HTMLfooter = `<div class="cell"></div>
        <div class="cell"></div>
        <div class="cell">${pajamos += account[i].income} Eur</div>
        <div class="cell">${islaidos += account[i].expense} Eur</div>
        <div class="cell">${bendra = pajamos - islaidos} Eur</div>`
footer.innerHTML = HTMLfooter;
}