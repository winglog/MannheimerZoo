import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';
import './style.css';

class BookDetails extends Component {

  displayBookDetails(){
    const { book } = this.props.data;
    if(book){
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books of this Author:</p>
          <ul className='other-books'>
            {book.author.books.map(item=>{
              return <li key={item.id}>{item.name}</li>
            })}
          </ul>
        </div>
      )
    } else {
      return(
        <div>No book selected</div>
      )
    }
  }

  render() {
    console.log("BookDetails props changing over time...", this.props);
    return (
      <div id='book-details'>
        <p>Book details</p>
        {this.displayBookDetails()}
        <p></p>
        <p></p>
      </div>
    )
  }
}

// How do I pass this.props.bookId to getBookQuery here?
export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);



