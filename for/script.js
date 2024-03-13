const list = ['latte', 'pomodori', 'cacao', 'insalata', 'carote',  'pomodori', 'piatti pronti'];

const listContainer = document.querySelector('.list-items');
console.log(listContainer)

for (let i = 0; i < list.length; i++) {
    const item = list[i];
    
    listContainer.innerHTML += `<li>${item}</li>`;
   
}