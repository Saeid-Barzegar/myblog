import Post from '../models/posts';

const postResolver = {
  Query: {
    getPosts: async () => {
      try {
        return await Post.find({})
      } catch (err) {
        console.log(err)
      }
    },
    getPost: async (id: string) => {
      const posts = await Post.findById(id)
      if (!posts) {
        throw new Error('Post not found')
      }
      return posts
    },
  },

  Mutation: {
    newPost: async (input) => {
      try {
        const post = new Post(input)
        return await post.save()
      } catch (err) {
        console.log(err)
      }
    },
    updatePost: async (id, input) => {
      let post = await Post.findById(id)
      if (!post) {
        throw new Error('Post not found')
      }
      post = await Post.findOneAndUpdate({ _id: id }, input, {
        new: true,
      })
      return post;
    },
    deletePost: async (id) => {
      const post = await Post.findById(id)
      if (!post) {
        throw new Error('Post not deleted')
      }
      await post.findOneAndDelete({ _id: id })
      return 'Post deleted'
    },
  },
}

export default postResolver;