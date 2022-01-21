// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import { ApolloServer, makeExecutableSchema } from 'apollo-server-micro'
import microCors from 'micro-cors';
import { send } from 'micro';

const cors = microCors();


import typeDefs from '../../database/typedefs';
import resolvers from '../../database/resolvers'
import connectDb from '../../database/config';

connectDb()

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export const config = {
  api: {
    bodyParser: true,
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers });
module.exports = apolloServer.start().then(() => apolloServer.createHandler({
  path: '/api/graphql'
})
// {
//   const handler = apolloServer.createHandler();
//   return cors((req, res) => req.method === 'OPTIONS' 
//     ? send(res, 200, 'ok') 
//     : handler(req, res))
// }
);