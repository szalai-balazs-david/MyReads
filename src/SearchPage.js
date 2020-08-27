import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import Book from './Book'

class SearchPage extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
    query === '' 
    ? this.setState(() => ({
      books: []
    }))
    : BooksAPI.search(query)
    .then(books => {
      books.error 
      ? this.setState(() => ({
          books: []
        }))
      : this.state.query === query &&
        this.setState(() => ({
          books: books
        }))
    })
  }

  onShelfChange = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
  }

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link 
            className="close-search" 
            to='/'
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books
              .map(book => (
                <Book 
                  key={book.id}
                  book={book}
                  shelf={'none'}
                  onShelfChange={this.onShelfChange}
                />
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage