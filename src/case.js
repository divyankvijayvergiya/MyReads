import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CaseHeader from './caseHeader'
import Shelves from './shelves'
import LinkSearch from './linksearch'
class Case extends Component{
	static propTypes = {
		bookss: PropTypes.arrayOf(PropTypes.object).isRequired,
		shelveChange: PropTypes.func.isRequired
	}
	
	constructor(props){
		super(props);
		this.defineShelves();
		
	}
	
	defineShelves = () =>{
		this.shelves = [
		   { title: "Currently Reading", slug: "currentlyReading"},
		   { title: "Want to Read", slug: "wantToRead"},
           { title: "Read", slug: "read" }
		]
	}
	
	render() {
		const shelves = this.shelves
		const { bookss, shelveChange }= this.props
		return(
		  <div className= "list-books">
		  
			<caseHeader/>
			<Shelves shelves = {shelves} bookss = {bookss} shelveChange={shelveChange} />
			<LinkSearch/>
			
		  </div>
		
		)
		
	}
	
}


export default Case