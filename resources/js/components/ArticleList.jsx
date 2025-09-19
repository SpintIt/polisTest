import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios.get('/api/v1/articles').then(response => {
            setArticles(response.data);
        });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Список статей</h1>
            <div className="space-y-6">
                {articles.map(article => (
                    <div
                        key={article.id}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <Link to={`/articles/${article.id}`} className="block">
                            <h2 className="text-2xl font-semibold text-indigo-600 hover:underline">{article.title}</h2>
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">{new Date(article.created_at).toLocaleDateString()}</p>
                        <p className="text-gray-700 mt-4">{article.content.length > 150 ? `${article.content.substring(0, 150)}...` : article.content }</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleList;
