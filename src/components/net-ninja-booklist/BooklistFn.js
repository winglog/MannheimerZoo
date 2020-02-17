import React from 'react';

import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
{
  books {
    name
    id
  }
}
`;

const Booklist = function Booklist(props) {

  const displayBooks = function(){
    let data = props.data;
    if(data.loading){
      return (<div>Loading books ...</div>);
    } else {
      return data.books.map( book => {
        return (
          <li>{book.name}</li>
        )
      })
    }
  };

  return (
    <div>
        <ul id='book-list'>
          {displayBooks()}
        </ul>
    </div>
  )
}

export default graphql(getBooksQuery)(Booklist);



