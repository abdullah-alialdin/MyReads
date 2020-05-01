import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const ShelfList = ({books, changeShelf}) => {
  return (
      <ol className="books-grid">
        {books.map(book => (
          <Book
            book={book}
            books={books}
            key={book.id}
            changeShelf={changeShelf}
          />
        ))}
      </ol>
    );
}

ShelfList.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default ShelfList;
