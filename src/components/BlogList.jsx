import { Link } from 'react-router-dom';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and how to create your first component.',
  },
  {
    id: 2,
    title: 'Understanding React Router',
    excerpt: 'A comprehensive guide to routing in React applications.',
  },
  {
    id: 3,
    title: 'State Management in React',
    excerpt: 'Explore different ways to manage state in your React applications.',
  },
];

function BlogList() {
  return (
    <div className="blog-list">
      <h1>Blog Posts</h1>
      <div className="posts">
        {blogPosts.map((post) => (
          <article key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`}>Read More</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogList; 