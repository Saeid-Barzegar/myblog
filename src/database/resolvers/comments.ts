import Coment from '../models/coments';

const comentResolver = {
  Query: {
    getComents: async () => {
      try {
        return await Coment.find({})
      } catch (err) {
        console.log(err)
      }
    },
    getComent: async (id: string) => {
      const coment = await Coment.findById(id)
      if (!coment) {
        throw new Error('Coment not found')
      }
      return coment
    },
  },

  Mutation: {
    newComent: async (input) => {
      try {
        const coment = new Coment(input)
        return await coment.save()
      } catch (err) {
        console.log(err)
      }
    },
    updateComent: async (id, input) => {
      let coment = await Coment.findById(id)
      if (!coment) {
        throw new Error('Coment not found')
      }
      coment = await Coment.findOneAndUpdate({ _id: id }, input, {
        new: true,
      })
      return coment;
    },
    deleteComent: async (id) => {
      const coment = await Coment.findById(id)
      if (!coment) {
        throw new Error('Coment not deleted')
      }
      await coment.findOneAndDelete({ _id: id })
      return 'Coment deleted'
    },
  },
}

export default comentResolver