
const library = [];

const title = document.querySelector("#title");
const author = document.querySelector('#author');
const status = document.querySelector('#status');

const form = document.querySelector('#add-book-form').addEventListener('submit', e => {
    e.preventDefault();
    addBookToLibrary(title.value, author.value, status.value);
    displayBooks();
})

const table = document.querySelector('#book-table');

function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
}

function addBookToLibrary(title, author, status) {
    const book = new Book(title, author, status);
    library.push(book);
}

function displayBooks() {
    table.innerHTML = "";
    library.forEach(book => {
        const row = 
            `<tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.status}</td>
                <td></td>
            </tr>`;
        table.insertAdjacentHTML("afterbegin", row);
    });
}

displayBooks();