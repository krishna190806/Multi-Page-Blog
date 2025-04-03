import { useParams, Link } from 'react-router-dom';

// Sample blog posts data (in a real app, this would come from an API or database)
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    content: 'React is a JavaScript library for building user interfaces. It lets you create reusable UI components and manage their state efficiently.',
    author: 'John Doe',
    date: 'March 31, 2024',
  },
  {
    id: 2,
    title: 'Understanding React Router',
    content: 'React Router is a standard library for routing in React. It enables the navigation between views of different components in a React application.',
    author: 'Jane Smith',
    date: 'March 30, 2024',
  },
  {
    id: 3,
    title: 'State Management in React',
    content: 'State management is crucial in React applications. There are various approaches, from using local state to global state management solutions.',
    author: 'Mike Johnson',
    date: 'March 29, 2024',
  },
];

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <Link to="/blog">Back to Blog List</Link>
      </div>
    );
  }

  return (
    <article className="blog-post">
      <h1>{post.title}</h1>
      <div className="post-meta">
        <span>By {post.author}</span>
        <span>Posted on {post.date}</span>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <Link to="/blog">Back to Blog List</Link>
    </article>
  );
}

export default BlogPost; 