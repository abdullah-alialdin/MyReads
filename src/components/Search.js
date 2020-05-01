import React from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  state = {
    query: '',
    newBooks: [],
    error: false
  };

  getBooks = (event) => {
    const query = event.target.value;
    this.setState({ query });
    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ newBooks: books, error: false })
          : this.setState({ newBooks: [], error: true });
      });
    } else {
      this.setState({ newBooks: [], searchErr: false });
    }
  };
  render(){
    const { query, newBooks, error } = this.state;
    const { books, changeShelf } = this.props;
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={this.getBooks}
              />
            </div>
          </div>
          <div className="search-books-results">
            {newBooks.length > 0 && (
              <div>
                <h3>Results {newBooks.length} books </h3>
                <ol className="books-grid">
                  {newBooks.map(book => (
                    <Book
                      book={book}
                      books={books}
                      key={book.id}
                      changeShelf={changeShelf}
                    />
                  ))}
                </ol>
              </div>
            )}
            {error && (
              <h3>No Books Found. Try again!</h3>
            )}
          </div>
        </div>
    );
  };
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Search;
