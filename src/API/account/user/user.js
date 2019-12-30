export const UsersQuery = {
    users(parent, args, { prisma }, info) { return prisma.query.users(null, info) }
}

export const UsersMutation = {
    async addUser(parent, { data }, { prisma }, info) {
        const newUser = await prisma.mutation.createUser({ data }, info)

        return newUser
    }
}

export const UsersSubscription = {

}
