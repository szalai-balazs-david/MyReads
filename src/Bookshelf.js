import React from 'react'
import Book from './Book'
import * as utils from './utils'

function Bookshelf(props){
  const {books, shelfId} = props
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{utils.camelCase2SentenceCase(shelfId)}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter(x => x.shelf === shelfId)
            .map(book => (
              <Book 
                key={book.id}
                image={book.imageLinks.thumbnail}
                title={book.title}
                author={book.author}
                shelf={shelfId}
              />
            ))}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf