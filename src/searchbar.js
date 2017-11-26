import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import InputSearch from './inputSearch'


class SearchBar extends Component{
	static PropTypes= {
		search: PropTypes.func.isRequired
	}
	
	render(){
		const { search }= this.props
		
	return(
		<div className= "search-books-bar">
			<Link to= "/" className="close-search">Close</Link>
			<InputSearch search ={search}/>	
		
		</div>
	
	)
	
	}


}

export default SearchBar