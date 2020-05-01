import React from 'react';
import ShelfSelector from './ShelfSelector';
import PropTypes from 'prop-types';

const Book = ({ book, books, changeShelf }) =>{
  const imageUrl = book.imageLinks.thumbnail;
  const bookTitle = book.title;
  return(
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <div className="book">
              <div className="book-top">
                <img className="book-cover" src={imageUrl} width="128" height="193" alt={bookTitle}/>
                <ShelfSelector book={book} books={books} changeShelf={changeShelf}/>
              </div>
              <div className="book-title">{bookTitle}</div>
              {book.authors && book.authors.map((bookAuthor, i) => (
                <div className="book-authors" key={i}>
                  {bookAuthor}
                </div>
              ))}
            </div>
          </li>
        </ol>
      </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Book;
