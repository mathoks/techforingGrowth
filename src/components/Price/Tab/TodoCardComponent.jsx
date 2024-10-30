import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TodoCardComponent = () => {
    const todos = [
        { title: "Task 1", description: "Description for task 1" },
        { title: "Task 2", description: "Description for task 2" },
        { title: "Task 3", description: "Description for task 3" },
        { title: "Task 4", description: "Description for task 4" },
        { title: "Task 5", description: "Description for task 5" },
        { title: "Task 6", description: "Description for task 6" },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const visibleTodos = todos.slice(startIndex, startIndex + 4);

    const handlePrevious = () => {
        setStartIndex(Math.max(0, startIndex - 1));
    };

    const handleNext = () => {
        setStartIndex(Math.min(todos.length - 4, startIndex + 1));
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="relative">
                <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide ">
                    {visibleTodos.map((todo, index) => (
                        <div
                            key={startIndex + index}
                            className="bg-white p-4 rounded shadow-md w-64 flex-shrink-0"
                        >
                            <h3 className="font-bold">{todo.title}</h3>
                            <p>{todo.description}</p>
                        </div>
                    ))}
                </div>
                {todos.length > 4 && (
                    <>
                        <button
                            onClick={handlePrevious}
                            disabled={startIndex === 0}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md disabled:opacity-50"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>

                        {/* Conditional Next Button */}
                        <button
                            onClick={handleNext}
                            disabled={startIndex >= todos.length - 4}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md disabled:opacity-50"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TodoCardComponent;


