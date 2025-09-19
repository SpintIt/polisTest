import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const CreateArticle = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/v1/articles', {title, content});
            navigate(`/articles/${response.data.data.id}`);
        } catch (error) {
            console.error('Error creating article:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Добавить новую статью</h1>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Заголовок:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Содержание:</label>
                    <textarea
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        required
                        rows="8"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                    >
                        Создать статью
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateArticle;
