import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookItems from './bookItems'

class ListBooks extends Component{
	static PropTypes={
		bookss: PropTypes.arrayOf(PropTypes.object).isRequired,
		shelveChange: PropTypes.func.isRequired
	}
	
	
	render(){
		
		const {bookss, shelveChange}= this.props
		
		return(
		 <ol className="books-grid">
		    {bookss.map((books, i) => <BookItems key={i} books={books} shelveChange={shelveChange} />)}

		 </ol>
		)
	}
	
	
	
}

export default ListBooks