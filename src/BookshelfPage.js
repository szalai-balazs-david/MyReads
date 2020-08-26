import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Bookshelf from './Bookshelf'

const shelves = [
  {
    id: 'currentlyReading',
    name: 'Currently Reading'
  },
  {
    id: 'wantToRead',
    name: 'Want to Read'
  },
  {
    id: 'read',
    name: 'Read'
  },
]

class BookshelfPage extends Component {
  render(){
    const {books} = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => (
              <Bookshelf key={shelf.id} books={books} shelfId={shelf.id} shelfName={shelf.name} />
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