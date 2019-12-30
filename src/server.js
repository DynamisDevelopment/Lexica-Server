import { GraphQLServer } from 'graphql-yoga'
import prisma from './prisma'
import { importSchema } from 'graphql-import'
import { Query } from './API/Queries'
import { Mutation } from './API/Mutations'

const server = new GraphQLServer({
    typeDefs: importSchema('./schema.graphql'),
    resolvers: {
        Query,
        Mutation,
        // Subscription
    },
    context: { prisma }
})

export default server