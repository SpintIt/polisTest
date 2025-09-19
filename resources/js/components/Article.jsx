import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Article = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [authorName, setAuthorName] = useState('');
    const [commentContent, setCommentContent] = useState('');

    useEffect(() => {
        axios.get(`/api/v1/articles/${id}`).then(response => {
            setArticle(response.data.data);
        });
    }, [id]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/api/v1/articles/${id}/comments`, {
                author_name: authorName,
                content: commentContent
            });
            const updatedArticle = await axios.get(`/api/v1/articles/${id}`);
            setArticle(updatedArticle.data.data);
            setAuthorName('');
            setCommentContent('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    if (!article) return <div className="p-4 text-center text-gray-500">Загрузка...</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <p className="text-gray-700 leading-relaxed">{article.content}</p>
            <hr className="my-6 border-gray-300" />

            <h2 className="text-2xl font-bold mb-4">Комментарии</h2>
            <div className="space-y-4">
                {article.comments.map(comment => (
                    <div key={comment.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                        <strong className="font-semibold text-gray-800">{comment.author_name}</strong>: <span className="text-gray-600">{comment.content}</span>
                    </div>
                ))}
            </div>

            <hr className="my-6 border-gray-300" />

            <h3 className="text-xl font-bold mb-4">Добавить комментарий</h3>
            <form onSubmit={handleCommentSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Имя:</label>
                    <input
                        type="text"
                        value={authorName}
                        onChange={e => setAuthorName(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Комментарий:</label>
                    <textarea
                        value={commentContent}
                        onChange={e => setCommentContent(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Отправить
                </button>
            </form>
        </div>
    );
};

export default Article;
