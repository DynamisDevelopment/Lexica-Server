import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'prisma/generated.graphql',
    endpoint: process.env.PRISMA_ENDPOINT
})

export default prisma