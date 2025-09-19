import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ArticleList from './components/ArticleList.jsx';
import Article from './components/Article.jsx';
import CreateArticle from './components/CreateArticle.jsx';

function App() {
    return (
        <div className="min-h-screen bg-gray-100 font-sans antialiased">
            <nav className="bg-white shadow-md py-4">
                <div className="container mx-auto flex justify-center space-x-4 text-lg">
                    <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Главная</Link>
                    <span className="text-gray-400">|</span>
                    <Link to="/create-article" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Создать статью</Link>
                </div>
            </nav>
            <main className="py-8">
                <Routes>
                    <Route path="/" element={<ArticleList />} />
                    <Route path="/articles/:id" element={<Article />} />
                    <Route path="/create-article" element={<CreateArticle />} />
                </Routes>
            </main>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
