import React from 'react'
import {Link} from "react-router-dom";
import * as BookAPI from "./BooksAPI"
import Book from "./Book";
import debounce from 'lodash.debounce';

class SearchBooks extends React.Component {
  state = {
    books: [],
    query: ''
  }

  componentWillUnmount() {
    this.searchBooksDebounced.cancel();
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
    if (query !== '') {
      this.searchBooksDebounced(query)
    }
    else {
      this.setState({
        books: []
      });
    }
  }

  searchBooks = (query) => {
    BookAPI.search(query)
      .then((books) => {
          !books || books.error ? this.setState({books: []}) : this.setState({books: books})
        }
      );
  }

  searchBooksDebounced = debounce(this.searchBooks, 300)

  render() {
    const books = this.state.books;
    const myBooks = this.props.myBooks;
    const booksWithShelf = books.map(book => {
      myBooks.map(myB => {
        if (myB.id === book.id) {
          book.shelf = myB.shelf;
        }
        return myB;
      });
      return book;
    });

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {booksWithShelf.length ?
            <ol className="books-grid">
              {booksWithShelf.map((book) => (
                <li key={book.id} className='book'>
                  <Book moveBook={this.props.moveBook} book={book}/>
                </li>
              ))}
            </ol>
            : <p>No results</p>
          }
        </div>
      </div>
    )
  }
}

export default SearchBooks