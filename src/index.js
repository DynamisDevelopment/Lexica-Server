import { GraphQLServer } from 'graphql-yoga'
import prisma from './prisma'
import { importSchema } from 'graphql-import'
// import { Query, Mutation, Subscription } from './resolvers'

// console.log(importSchema('./API/account/user.graphql'))

const server = new GraphQLServer({
    typeDefs: importSchema('./schema.graphql'),
    resolvers: {
        // Query,
        // Mutation,
        // Subscription
    },
    context: { prisma }
})

server.start(() => console.log('server running'))