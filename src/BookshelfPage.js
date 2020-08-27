import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf'

class BookshelfPage extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  onShelfChange = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
    .then(res => BooksAPI.getAll())
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  render(){
    const books = this.state.books
    const shelves = Array.from(new Set(books.map(book => book.shelf)))
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => (
              <Bookshelf key={shelf} books={books} shelfId={shelf} onShelfChange={this.onShelfChange} />
            ))}
          </div>
        </div>
        <Link 
          to='/search'
          className="open-search"
        >
          Add a book
        </Link>
      </div>
    )
  }
}

export default BookshelfPage