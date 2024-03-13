const list = [
    'latte', 
    'pomodori',
    'cacao',
    'insalata',
    'carote', 
    'pomodori',
    'piatti pronti',
]

const listContainer = document.querySelector('.list-items');
console.log(listContainer)

let i = 0;

while(i < list.length) {
    const item = list[i];

    i++;

    listContainer.innerHTML += `<li>${item}</li>`;

}