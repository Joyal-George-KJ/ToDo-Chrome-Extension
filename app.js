const input = document.querySelector('.inputs');
const button = document.querySelector('button');

const ulSpace = document.querySelector('ul.todo-holders');

let storeTodo = [];

function renderList() {
    ulSpace.innerHTML = ''
    
    storeTodo = JSON.parse(localStorage.getItem('todos'))
    
    storeTodo == null && (storeTodo = [])

    storeTodo.length != 0 ? storeTodo.map((val, index) => {

        ulSpace.innerHTML += `<li accesskey="${index}"><p class="text" pattern="">${val}</p></li>`;

    }) : ulSpace.innerHTML += `<li class="color-grey" accesskey="-1"><p class="text">Example ToDo : List is Empty</p></li>`;
}





ulSpace.addEventListener('click', (e) => {

    let accessKey = parseInt(e.target.accessKey);

    storeTodo.splice(accessKey, 1)
    localStorage.setItem('todos', JSON.stringify(storeTodo))

    renderList();

})



document.querySelector('body').addEventListener('keypress', (e) => {
    
    if(e.code == 'Enter') {
        if (input.value.length != 0) {
            
            storeTodo.push(input.value);
            localStorage.setItem('todos', JSON.stringify(storeTodo));
            
            renderList();
            
        } else {

            alert('Type Something');
            
        }
        
        input.value = ''
    }

})

button.addEventListener('click', () => {
        
    if (input.value.length != 0) {
        
        storeTodo.push(input.value);
        localStorage.setItem('todos', JSON.stringify(storeTodo));
        
        renderList();
        
    } else {

        alert('Type Something');
        
    }
    
    input.value = ''
    
})

renderList()