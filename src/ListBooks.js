import React from 'react'
import {Link} from "react-router-dom";
import Bookshelf from "./Bookshelf";

const bookshelves = [
  {
    key: 'currentlyReading',
    title: "Currently Reading",
  },
  {
    key: 'wantToRead',
    title: 'Want to Read',
  },
  {
    key: 'read',
    title: 'Read',
  }
]

class ListBooks extends React.Component {
  render() {
    const {myBooks, moveBook} = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookshelves.map((bookshelf) => (
              <Bookshelf key={bookshelf.key}
                         books={myBooks.filter(book => book.shelf === bookshelf.key)}
                         bookshelf={bookshelf}
                         moveBook={moveBook}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks