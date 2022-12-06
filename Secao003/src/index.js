import { ApolloServer, gql } from 'apollo-server';

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
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID
      userName: String
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'asd8708',
          userName: 'thais_alves',
        };
      },

      users: () => {
        return [
          {
            id: '1',
            userName: 'thais_alves',
          },
          {
            id: '2',
            userName: 'bia_burguesa',
          },
          {
            id: '3',
            userName: 'wanda_maximoff',
          },
          {
            id: '4',
            userName: 'natasha_romanoff',
          },
        ];
      },
    },
  },
});

server
  .listen(4003)
  .then(({ url }) => console.log(`Server listening on url ${url}`));
