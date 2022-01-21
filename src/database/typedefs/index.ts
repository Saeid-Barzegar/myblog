import { gql } from 'apollo-server-micro';
const typeDefs = gql`
  # users
  type User {
    _id: ID
    name: String
    email: String
    password: String
    access: String
  }
  input UserInput {
    name: String!
    email: String!
    password: String!
    access: String
  }
  # comments
  type Comment {
    _id: ID
    title: String
    comment: String
    writer: User
  }
  type CommentInput {
    title: String
    comment: String!
    writer: User!
  }
  # Posts
  type Post {
    _id: ID
    title: String
    image: String
    content: String
    creator: String
  }
  type PostInput {
    title: String!
    image: String!
    content: String!
    creator: String!
  }
  type Query {
    getUsers: [User]
    getUser(id: ID!): User
    getPosts: [Post]
    getPost(id: ID!): Post
    getComents: [Post]
    getComent(id: ID!): Post
  }
  type Mutation {
    # Users
    newUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
    deleteUser(id: ID!): String
    # Posts
    newPost(input: PostInput): Post
    updatePost(id: ID!, input: PostInput): Post
    deletePost(id: ID!): String
    # Comments
    newComent(input: CommentInput): Comment
    updateComent(id: ID!, input: CommentInput): Comment
    deleteComent(id: ID!): String
  }
`

export default typeDefs;