import React from 'react'
import {Link} from "react-router-dom";
import * as BookAPI from "./BooksAPI"
import Book from "./Book";

class SearchBooks extends React.Component {
  state = {
    books: [],
    query: ''
  }

  componentDidMount() {
    BookAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  updateQuery = (query) => {
    query = query.trim()
    this.searchBooks(query)
    this.setState(() => ({
      query: query
    }))
  }

  searchBooks = (query) => {
    BookAPI.search(this.state.query)
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    const books = this.state.books
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
          {books &&
            <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id} className='book'>
                <Book title={book.title} authors={book.authors} thumbnail={book.imageLinks.smallThumbnail}/>
              </li>
            ))}
          </ol>
          }
          {!books && <p>No results</p>}
        </div>
      </div>
    )
  }
}

export default SearchBooks