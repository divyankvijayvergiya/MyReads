import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookShelf from './bookShelf'


class Shelves extends Component{
	static PropTypes= {
		shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
		bookss: PropTypes.arrayOf(PropTypes.object).isRequired,
		shelveChange: PropTypes.func.isRequired
		
		
	}
	
	booksForShelf = (shelf) => this.props.bookss.filter(books => books.shelf === shelf.slug)
	
	render(){
		
		const {shelves, shelveChange}= this.props
		
		return(
			<div className= "list-books-content">
				<div>
					{shelves.map((shelf, i)=> <BookShelf key={i} title ={shelf.title} bookss={this.booksForShelf(shelf)} shelveChange={shelveChange}/>)}
				</div>
			</div>
		)
		
		
	}
}

export default Shelves