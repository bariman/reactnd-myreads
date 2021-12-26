import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";
import './App.css'
import * as BookAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  moveBook = (book, shelf) => {
    BookAPI.update(book, shelf);
    let updatedBooks = this.state.books.filter(b => b.id !== book.id);

    if (shelf !== 'none') {
      book.shelf = shelf;
      updatedBooks = updatedBooks.concat(book);
    }

    this.setState({
      books: updatedBooks,
    });
  }

  componentDidMount() {
    BookAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ListBooks moveBook={this.moveBook} books={this.state.books}/>}/>
          <Route path="/search" element={<SearchBooks moveBook={this.moveBook} />}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp