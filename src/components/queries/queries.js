// Externalize all queries to this file

import { gql } from 'apollo-boost';

const getBooksQuery = gql`
{
  books {
    name
    id
  }
}
`;

// Get a single book by ID
const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      name
      id
      genre
      author{
        id
        name
        rank
        books {
          name
          id
        }
      }
    }
  }
`;

const getAuthorsQuery = gql`
{
  authors {
    name
    id
  }
}
`;

const addBookMutation = gql`
mutation($name: String!, $genre: String!, $authorId: ID!) {
  addBook( input : {
    name: $name,
    genre: $genre,
    authorId: $authorId
  }) {
    name
    id
  }
}
`;

export {
  getAuthorsQuery,
  getBooksQuery,
  getBookQuery,
  addBookMutation
};