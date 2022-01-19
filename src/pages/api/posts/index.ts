const postArray = [
  { title: 'Post 1', content: 'Content Post 1', creator: 'Saeid Barzegar' },
  { title: 'Post 2', content: 'Content Post 2', creator: 'Saeid Barzegar' },
  { title: 'Post 3', content: 'Content Post 3', creator: 'Saeid Barzegar' },
  { title: 'Post 4', content: 'Content Post 4', creator: 'Saeid Barzegar' },
  { title: 'Post 5', content: 'Content Post 5', creator: 'Saeid Barzegar' },
]

export default function handler(req, res) {
  res.status(200).json(postArray)
}