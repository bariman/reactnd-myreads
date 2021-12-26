import React from 'react'
import BookshelfChanger from "./BookshelfChanger";

class Book extends React.Component {
  render() {
    const {book, moveBook} = this.props
    const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : null
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
          <BookshelfChanger
            book={book}
            moveBook={moveBook}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
      </div>
    )
  }
}

export default Book