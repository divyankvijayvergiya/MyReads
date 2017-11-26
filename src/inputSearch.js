import React, {Component} from 'react'
import PropTypes from 'prop-types'


class InputSearch extends Component{
	static PropTypes={
		search: PropTypes.func.isRequired
		
		
	}
	
	handleChange= (event) => this.props.search(event.target.value)
	
	
	render(){
		return(
		<div className="search-books-input-wrapper">
			<input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>
		</div>
		)
	}
	
	
}

export default InputSearch