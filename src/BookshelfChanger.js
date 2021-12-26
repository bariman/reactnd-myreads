import React from 'react'

class BookshelfChanger extends React.Component {
  state = {
    value: this.props.book.shelf,
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    })
    this.props.moveBook(this.props.book, event.target.value)
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value || 'none'} onChange={this.handleChange}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookshelfChanger