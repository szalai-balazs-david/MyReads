import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchPage from './SearchPage'
import BookshelfPage from './BookshelfPage'

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookshelfPage />
          )} 
        />
        <Route exact path='/search' component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
