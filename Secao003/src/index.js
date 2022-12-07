import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';

// const server = new ApolloServer({
//   typeDefs: gql`
//     type Query {
//       id: ID!
//       name: String!
//       age: Int!
//       average: Float!
//       married: Boolean! #Ao inserir ! você torna o objeto OBRIGATÓRIO
//       arrayString: [String!]! #Impedi que dentro Array retorne NULL dentro
//     }
//   `,
//   resolvers: {
//     Query: {
//       id: () => 'iasd987-7-b',
//       name: () => 'Thais Alves',
//       age: () => 29,
//       average: () => 50.55,
//       married: () => false,
//       arrayString: () => ['A', 'B'],
//     },
//   },
// });

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen(4003)
  .then(({ url }) => console.log(`Server listening on url ${url}`));
