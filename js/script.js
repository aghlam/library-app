function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
}

const library = new Map();

const title = document.querySelector("#title");
const author = document.querySelector('#author');
const status = document.querySelector('#status');
const table = document.querySelector('#book-table');

const form = document.querySelector('#add-book-form').addEventListener('submit', e => {
    e.preventDefault();
    addBookToLibrary(title.value, author.value, status.value);
    clear();
    displayBooks();
})

const initaliseTable = () => {
    table.addEventListener('click', e => {
    
        const title = e.target.parentNode.parentNode.firstElementChild.innerText;
    
        if (e.target && e.target.id === 'delete-button') {
            deleteBook(title);
        }
    
        if (e.target && e.target.id === 'toggle-button') {
            toggleStatus(title);
        }
    
        displayBooks();
    });
}

const toggleStatus = title => {
    const book = library.get(title);

    library.set(book.title, {...book, status: book.status === "Read" ? "Unread" : "Read"})
}

const addBookToLibrary = (title, author, status) => {
    const book = new Book(title, author, status);
    
    library.set(book.title, book);
}

const deleteBook = title => {
    library.delete(title);
}

const clear = () => {
    title.value = '';
    author.value = '';
}

const displayBooks = () => {
    table.innerHTML = "";
    library.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML =
            `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td><button id='toggle-button'>${book.status}</button></td>
            <td><button id='delete-button' class='u-pull-right'>DELETE</button></td>
            `;

        table.appendChild(row);
    });
}

initaliseTable();