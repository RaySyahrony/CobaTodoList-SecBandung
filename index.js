// Mengambil Form Element
const formElement = document.querySelector('.form-todo');

// Memanbhakan Form Event Lisstener
formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    //Mengambil Input Elemnet di HTML
    const inputElement = document.querySelector('.input-todo');
    console.log(inputElement.value);

    //Mengambil Wrapper todo sebagai entry todo item
    const wrapperTodoElement = document.querySelector('.wrapper-todo');

    //Membuat todo item di js
    // const todItem = `<li class="wrapper-todo">${inputElement.value}</li>`;
    const todoItem = document.createElement('li');
    todoItem.innerHTML = inputElement.value;
    //Menambahkan todo ke wrapper todo
    // wrapperTodoElement.innerHTML = todoItem;
    wrapperTodoElement.append(todoItem);

    //Menghapus Input value setelah submit
    inputElement.value='';
});