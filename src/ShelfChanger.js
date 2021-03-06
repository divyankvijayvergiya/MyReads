import React, { Component } from 'react'
import PropTypes from 'prop-types'

class  ShelfChanger extends Component{
	static PropTypes={
		books: PropTypes.object.isRequired,
		shelveChange: PropTypes.func.isRequired
	} 	
	handleChange =(event) => this.props.shelveChange(this.props.books, event.target.value)
	
	render(){
		const {books}= this.props
		
		return(
		 <div className="book-shelf-changer">
            <select value={books.shelf} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
			
		 </div>
		
		
		)
	}
}

export default ShelfChanger