import User from '../models/users';

const userResolver = {
  Query: {
    getUsers: async () => {
      try {
        return await User.find({})
      } catch (err) {
        console.log(err)
      }
    },
    getUser: async (id: string) => {
      const user = await User.findById(id)
      if (!user) {
        throw new Error('User not found')
      }
      return user
    },
  },

  Mutation: {
    newUser: async (input) => {
      try {
        const user = new User(input)
        return await user.save()
      } catch (err) {
        console.log(err)
      }
    },
    updateUser: async (id, input) => {
      let user = await User.findById(id)
      if (!user) {
        throw new Error('User not found')
      }
      user = await User.findOneAndUpdate({ _id: id }, input, {
        new: true,
      })
      return user;
    },
    deleteUser: async (id) => {
      const user = await User.findById(id)
      if (!user) {
        throw new Error('User not deleted')
      }
      await user.findOneAndDelete({ _id: id })
      return 'User deleted'
    },
  },
}

export default userResolver