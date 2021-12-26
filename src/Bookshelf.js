import React from 'react'
import Book from "./Book";

class Bookshelf extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    const books = this.props.books
    return (
      <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.bookshelf.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.map((book) => (
                    <li key={book.id} className='book'>
                      <Book
                        book={book}
                        moveBook={this.props.moveBook}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
    )
  }
}

export default Bookshelf