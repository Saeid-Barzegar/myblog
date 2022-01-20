
interface BlogPropTypes {
  posts: {
    title: string;
    content: string;
    creator: string;
  }[]
}

const Blog = (props: BlogPropTypes) => {
  const { posts = [] } = props;
  return(
    <div>
      <h1>Blog</h1>
      <h2>{process.env.APP_NAME}</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>{post.creator}</p>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch('http://localhost:3000/api/posts');
  const data = await response.json();
  return {
    props: {
      posts: data
    }
  }
}

export default Blog;

