import React from 'react'
import Book from "./Book";
import PropTypes from 'prop-types';

class Bookshelf extends React.Component {

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

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  bookshelf: PropTypes.object.isRequired,
  moveBook: PropTypes.func.isRequired,
}

export default Bookshelf