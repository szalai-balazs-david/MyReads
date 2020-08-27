import React from 'react'
import {Link} from 'react-router-dom'
import Bookshelf from './Bookshelf'

function BookshelfPage (props) {
  const {books, onShelfChange} = props
  const shelves = Array.from(new Set(books.map(book => book.shelf)))
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map(shelf => (
            <Bookshelf 
              key={shelf} 
              books={books} 
              shelfId={shelf} 
              onShelfChange={onShelfChange} 
            />
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

export default BookshelfPage