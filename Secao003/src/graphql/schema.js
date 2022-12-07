import { gql } from 'apollo-server';
import { postTypeDefs } from './post/typedefs';
import { postResolvers, userResolvers } from './user/resolver';
import { userTypeDefs } from './user/typedefs';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
