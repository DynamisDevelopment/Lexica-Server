import 'cross-fetch/polyfill'
import ApolloBoost, { gql } from 'apollo-boost'
import bcrypt from 'bcryptjs'
import prisma from '../../../prisma'

const client = new ApolloBoost({ uri: 'http://localhost:4001/' })

beforeEach(async () => {
    await prisma.mutation.deleteManyUsers()
    await prisma.mutation.createUser({
        data: {
            name: "Human-000001",
            email: "someemail@gmail.com",
            password: bcrypt.hashSync('SuperSecretPassword!@'),
            apiKey: "fsf432432dff",
        }
    })
})

describe('CRUD operations work on User', () => {
    it('Should create a new user', async () => {
        const createUser = gql`
            mutation {
            addUser(data: {
                name: "Human-000002",
                email: "someofsasaf@gmail.com",
                password: "SuperSecretPassword",
                apiKey: "fsffdsfdaafasdff",
            }) {
                name
                id
            }}`

        const response = await client.mutate({ mutation: createUser })

        const exists = await prisma.exists.User({ id: response.data.addUser.id })
        expect(exists).toBe(true)
    })

    it('Should update an existing user', async () => {
        const updateUser = gql`
            mutation {
                updateUser(email: "someemail@gmail.com", data: {
                    name: "Human-6648392",
                    email: "someemail@gmail.com",
                    password: "SuperSecretPassword",
                    apiKey: "fsf432432dff",
                }) {
                    name
                }}`

        const res = await client.mutate({ mutation: updateUser })
        const updated = await prisma.query.users({ name: res.data.updateUser.name })

        expect(updated[0].name).toBe('Human-6648392')
    })

    it('Should read all existing users', async () => {
        const readUser = gql`
            query {
                users { name }
            }`

        const res = await client.query({ query: readUser })
        expect(res.data.users.length).toBeGreaterThanOrEqual(1)
    })

    it('Should delete a User', async () => {
        const testUser = await prisma.query.users({ where: { email: "someemail@gmail.com" } }, '{ id }')
        const removeUser = gql`
            mutation {
                deleteUser(id: "${testUser[0].id}") { name }
            }`

        await client.mutate({ mutation: removeUser })
        const removedUser = await prisma.exists.User({ id: testUser.id })

        expect(removedUser).toBe(false)
    })
})


