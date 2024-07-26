function fetchBooks () {
    fetch('/api/books')
        .then(response => response.json())
        .then(books => {
            const tableBody = document.querySelector('#booksTable tbody');
            tableBody.innerHTML = '';

            books.forEach(book => {
                const row = document.createElement('tr');
                row.dataset.id = book.id;

                row.innerHTML = `
                    <td>${book.id}</td>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td>${book.publishedDate}</td>
                    <td>${book.price}</td>
                    <td class="action-col">
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);

                row.querySelector('.edit-btn').addEventListener('click', () => editBook(book.id));
                row.querySelector('.delete-btn').addEventListener('click', () => deleteBook(book.id));
            });
        });
}

document.querySelector('#bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = document.querySelector('#bookId').value;
    const book = {
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
        isbn: document.querySelector('#isbn').value,
        publishedDate: document.querySelector('#publishedDate').value,
        price: parseFloat(document.querySelector('#price').value)
    };

    const url = id ? `/api/books/${id}` : '/api/books';
    const method = id ? 'PUT' : 'POST';

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
        .then(response => {
            if (response.ok) {
                fetchBooks();
                document.querySelector('#bookForm').reset();
                document.querySelector('#bookId').value = '';
            }
        });
});

function editBook(id) {
    fetch(`/api/books/${id}`)
        .then(response => response.json())
        .then(book => {
            document.querySelector('#bookId').value = book.id;
            document.querySelector('#title').value = book.title;
            document.querySelector('#author').value = book.author;
            document.querySelector('#isbn').value = book.isbn;
            document.querySelector('#publishedDate').value = book.publishedDate;
            document.querySelector('#price').value = book.price;
        });
}

function deleteBook(id) {
    fetch(`/api/books/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                fetchBooks();
            }
        });
}

fetchBooks();