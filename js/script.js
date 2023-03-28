
const library = new Map();

const title = document.querySelector("#title");
const author = document.querySelector('#author');
const status = document.querySelector('#status');

const form = document.querySelector('#add-book-form').addEventListener('submit', e => {
    e.preventDefault();
    addBookToLibrary(title.value, author.value, status.value);
    clear();
    displayBooks();
})

const table = document.querySelector('#book-table');

table.addEventListener('click', e => {
    if (e.target && e.target.id === 'delete-button') {
        deleteBook(e);
    }
});

function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
}

const addBookToLibrary = (title, author, status) => {
    const book = new Book(title, author, status);
    library.set(book.title, book);
}

const deleteBook = e => {
    const title = e.target.parentNode.parentNode.firstElementChild.innerText;
    library.delete(title);
    displayBooks();
}

const clear = () => {
    title.value = '';
    author.value = '';
}

function displayBooks() {
    table.innerHTML = "";
    library.forEach(book => {
        const row = 
            `<tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.status}</td>
                <td><button id='delete-button'>DELETE</button></td>
            </tr>`;

        table.insertAdjacentHTML("beforeend", row);
    });
}

displayBooks();