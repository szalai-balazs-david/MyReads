import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage'
import BookshelfPage from './BookshelfPage'

class BooksApp extends Component {
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

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookshelfPage 
            books={this.state.books}
            onShelfChange={this.onShelfChange}
          />
          )} 
        />
        <Route exact path='/search' render={() => (
          <SearchPage 
            books={this.state.books}
            onShelfChange={this.onShelfChange}
          />
          )} 
        />
      </div>
    )
  }
}

export default BooksApp
