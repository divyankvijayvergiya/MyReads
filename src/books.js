import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'


class Books extends Component{
	static PropTypes = {
    books: PropTypes.object.isRequired,
    shelveChange: PropTypes.func.isRequired
  }
  
  render(){
	  const { books, shelveChange } = this.props
	  const thumbnail = books.imageLinks ? books.imageLinks.thumbnail : ""
	  const title = books.title
	  const author = (books.author || [])[0]
	  
	  
	  return(
		<div className="book">
           <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})`}}>
			  </div> 
			  <ShelfChanger books= {books} shelveChange = {shelveChange} /> 
			   </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
	  )
  }

}

export default Books