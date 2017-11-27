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
	  const thumbnail = books.imageLinks ? books.imageLinks.thumbnail : "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
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