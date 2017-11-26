import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class BookShelf extends Component{
	static PropTypes= {
		title: PropTypes.string.isRequired,
		bookss: PropTypes.arrayOf(PropTypes.object).isRequired,
		shelveChange: PropTypes.func.isRequired
		
		
	}
	
	render(){
		const { title, bookss, shelveChange }= this.props
		
		return(
		   <div className="bookshelf">
             <h2 className="bookshelf-title">{title}</h2>
             <div className="bookshelf-books">
			   <ListBooks bookss={bookss} shelveChange={shelveChange}/>
			   </div>
			   </div>
			   
		
		)
		
	}
	
}

export default BookShelf