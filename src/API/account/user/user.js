const UsersQuery = {
    users(parent, args, { prisma }, info) { return prisma.query.users(null, info) }
}

const UsersMutation = {
    async addUser(parent, { data }, { prisma }, info) {
        return prisma.mutation.createUser({ data }, info)
    },
    async updateUser(parent, args, { prisma }, info) {
        return prisma.mutation.updateUser({
            where: { email: args.email },
            data: args.data
        }, info)
    },
    async deleteUser(parent, args, { prisma }, info) {
        return prisma.mutation.deleteUser({ where: { id: args.id } }, info)
    }
}

const UsersSubscription = {

}

module.exports = {
    UsersQuery,
    UsersMutation,
    UsersSubscription
}