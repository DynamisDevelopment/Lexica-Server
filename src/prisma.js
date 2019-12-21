import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'prisma/generated.graphql',
    endpoint: 'http://192.168.99.101:4466'
})

export default prisma