import React from 'react';
import * as BooksAPI from './utils/BooksAPI';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './css/App.css';
import BookShelf from './components/BookShelf';
import Search from './components/Search';

class BooksApp extends React.Component {
  state = {
     books: []
    };

    componentDidMount() {
      BooksAPI.getAll().then(books => this.setState({ books }));
    };

    changeShelf = (changedBook, shelf) => {
      BooksAPI.update(changedBook, shelf).then(response => {
        changedBook.shelf = shelf;
        this.setState(prevState => ({
          books: prevState.books
            .filter(book => book.id !== changedBook.id)
            .concat(changedBook)
        }));
      });
    };

  render() {
    return (
      <div className="app">
            <Route
              path="/search"
              render={() => (
                <Search books={this.state.books} changeShelf={this.changeShelf} />
              )}
            />
            <Route
              exact
              path="/"
              render={() => (
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>My Reads</h1>
                  </div>
                  <BookShelf books={this.state.books} changeShelf={this.changeShelf} />
                  <div className="open-search">
                    <Link to="/search"><button>Add a book</button></Link>
                  </div>
                </div>
              )}
            />
      </div>
    );
  };
}

export default BooksApp
