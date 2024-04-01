const { gql } = reqire("apollo-server");

const typeDefs= gql`
type User{
name: String!
username: String!
age: Int!
naitionality: String!
}
type Query{
   users: [User!]!
}
`;

module.exports= {typeDefs}