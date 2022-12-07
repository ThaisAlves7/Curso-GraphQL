import { gql } from 'apollo-server';

import { postTypeDefs } from './post/typedefs';
import { userTypeDefs } from './user/typedefs';

import { userResolvers } from './user/resolvers';
import { postResolvers } from './post/resolvers';
import { apiFilterTypesDefs } from './api-filters/resolvers';

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

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFilterTypesDefs,
];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
