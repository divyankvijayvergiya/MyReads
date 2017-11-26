import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Books from './books'

class BookItems extends Component{
	
	
	static propTypes= {
		
		books: PropTypes.object.isRequired,
		shelveChange: PropTypes.func.isRequired
	}
	
	
	render(){
		
	   const { books, shelveChange } = this.props
	   
	   return(
		<li>
		<Books books={books} shelveChange={shelveChange} />
		</li>
	   )
	}
}

export default BookItems