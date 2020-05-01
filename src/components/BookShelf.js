import React from 'react';
import ShelfList from './ShelfList';
import PropTypes from 'prop-types';

const BookShelf = ({books, changeShelf}) => {
  const categories = [
    { id: 'currentlyReading', title: 'Currently Reading' },
    { id: 'wantToRead', title: 'Want to Read' },
    { id: 'read', title: 'Read' }
  ];
  return(
    <div className="list-books-content">
      {categories.map((shelf, i) => {
        const shelfBooks = books.filter(book => book.shelf === shelf.id);
        return (
          <div className="bookshelf" key={i}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
              <ShelfList books={shelfBooks} changeShelf={changeShelf} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default BookShelf;
