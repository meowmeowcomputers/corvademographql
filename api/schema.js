const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');
const typeDefs = `
type Query {
  users: [User!]!
  user(id: ID, userName: String): User
  books: [Book!]!
  book(id: ID, title:String): Book
  me: User
}

type User {
  id: ID!
  userName: String!
  books: [Book!]!
}

type Book {
  id: ID!
  title: String!
  author: String!
  createdBy: User!
}

type Mutation {
  signup (userName: String!, password: String!): String
  login (userName: String!, password: String!): String
  addBook (title: String!, author: String!): Book
  deleteBook(title: String, id: String): Book
}
`

module.exports = makeExecutableSchema({ typeDefs, resolvers });
