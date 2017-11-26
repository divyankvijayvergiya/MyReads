import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class SearchResults extends Component{
	static PropTypes= {
		bookss: PropTypes.arrayOf(PropTypes.object).isRequired,
		shelveChange: PropTypes.func.isRequired
		
	}
	
	render(){
		const { bookss, shelveChange}= this.props
		
		
		return(
			<div className="search-books-results">
				<ListBooks bookss={bookss} shelveChange={shelveChange}/>
			
			</div>
		
		
		)
		
		
	}
	
	
	
}

export default SearchResults