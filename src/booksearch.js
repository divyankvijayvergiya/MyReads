import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import SearchBar from './searchbar'
import SearchResults from './searchresults'


class BookSearch extends Component{
	static PropTypes= {
		shelveChange: PropTypes.func.isRequired,
		currentShelf: PropTypes.func.isRequired
	}
		
	state={
		bookss:[]
	}
	
	
	search= (searchTerms, maxResults= 50)=>{
		if(!searchTerms){
			this.resetSearchResults()
			
		}else{
		 BooksAPI.search(searchTerms, maxResults).then((results)=> {
			 if(results.error) {
				 this.resetSearchResults()
				 
			 }else{
				 this.updateSearchResults(this.shelfBooks(results))
			 }
			 
			 
		 })
			
			
		}
		
		
	}
	
	resetSearchResults = () => this.setState({books: []})
	
	shelfBooks = (bookss) => bookss.map(this.assignShelf)
	
	assignShelf= (books) =>{
		books.shelf = this.props.currentShelf(books.id)
		
		return books
	}
	
	updateSearchResults = (bookss) =>{
		this.setState({bookss})
		
	}
	
	render(){
		const { bookss }= this.state
		const { shelveChange }= this.props
		
		return(
			<div className= "search-books">
				<SearchBar search= {this.search} />
				<SearchResults bookss= {bookss} shelveChange= {shelveChange} />
			</div>
		)
	}
	
	
	
}

export default BookSearch