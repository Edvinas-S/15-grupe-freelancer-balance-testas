const menesiai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];
console.log(menesiai);

const lentele = document.querySelector('.table-content');
console.log(lentele);

for (let i=0; i < account.length; i++) {
let HTML = ``;
HTML = `<div class="table-row">
                <div class="cell">${account[i].month}</div>
                <div class="cell">${menesiai[i]}</div>
                <div class="cell">${account[i].income}Eur</div>
                <div class="cell">${account[i].expense}Eur</div>
                <div class="cell">${account[i].income - account[i].expense}Eur</div>
            </div>`
lentele.innerHTML += HTML;
}
