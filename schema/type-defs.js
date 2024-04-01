const { gql } = require("apollo-server");

const typeDefs= gql`
type User{
id:Int!
name: String!
username: String!
age: Int!
nationality: String!
}
type Query{
   users: [User!]!
}
`;

module.exports= {typeDefs}