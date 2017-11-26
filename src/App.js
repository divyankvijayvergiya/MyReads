import React from 'react'
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import BookSearch from './booksearch'
import Case from './case'
import './App.css'


class BooksApp extends React.Component {
	
	
    state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
	 bookss:[]
    }
  
    componentDidMount(){
	  this.refreshBooks()
	}
	
    shelveChange= (books, shelfSlug)=> BooksAPI.update(books, shelfSlug).then(this.refreshBooks)

    refreshBooks = () => BooksAPI.getAll().then(bookss => this.setState({bookss}))
	
	currentShelf= (bookId) =>{
		const bookOnShelf= this.findBookOnShelf(bookId)
		return bookOnShelf ? bookOnShelf.shelf : "none"
		
		
	}
	
	findBookOnShelf = (bookId)=> this.state.bookss.find(books => books.id=== bookId)
	
	render(){
		const {bookss} = this.state
		
		return(
		  <div className="app">
			<Route exact path = "/search" render={() => <BookSearch currentShelf = {this.currentShelf} shelveChange = {this.shelveChange}/>}/>
		    <Route exact path="/" render={() => <Case bookss={bookss} shelveChange={this.shelveChange} />} />
			
		   </div>	
 
		)
		
		
	}
	
   	
  
  
}

export default BooksApp

  