import { merge } from 'lodash';
import postResolver from './posts';
import usersResolver from './users';
import commentResolver from './comments';

const resolvers = merge(
  postResolver,
  usersResolver,
  commentResolver,
);

export default resolvers;