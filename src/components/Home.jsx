import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Explore our latest articles and stay updated with the newest content.
            </p>
            <Link
              to="/blog"
              className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Explore Articles
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="text-indigo-600 text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Rich Content</h3>
            <p className="text-gray-600">Discover in-depth articles on various topics written by experts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="text-indigo-600 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Latest Updates</h3>
            <p className="text-gray-600">Stay informed with our regularly updated content and news.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="text-indigo-600 text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Engaging Topics</h3>
            <p className="text-gray-600">Explore thought-provoking ideas and discussions.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to dive in?</h2>
          <p className="text-gray-600 mb-8">Join our community and start exploring today.</p>
          <Link
            to="/blog"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 