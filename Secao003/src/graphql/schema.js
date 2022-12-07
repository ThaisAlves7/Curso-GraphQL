import { gql } from 'apollo-server';

import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typedefs';
import { apiFiltersResolvers } from './api-filters/resolvers';
import { apiFilterTypesDefs } from './api-filters/typedefs';
import { postResolvers } from './post/resolvers';
import { postTypeDefs } from './post/typedefs';

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
export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  apiFiltersResolvers,
];
