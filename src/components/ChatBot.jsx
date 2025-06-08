import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatBot = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState([
        { type: 'bot', message: 'Hi! I\'m your AI assistant. How can I help you with your applications today?' }
    ]);
    const [chatInput, setChatInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChatSend = () => {
        if (!chatInput.trim()) return;
        
        // Add user message
        setChatMessages(prev => [...prev, { type: 'user', message: chatInput }]);
        setChatInput('');
        setIsLoading(true);

        // Simulate bot response
        setTimeout(() => {
            setChatMessages(prev => [...prev, { 
                type: 'bot', 
                message: 'I understand you\'re asking about ' + chatInput + '. Let me help you with that.' 
            }]);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <>
            {chatOpen && (
                <div className="fixed bottom-24 right-6 w-80 h-96 bg-white bg-opacity-95 backdrop-blur-xl rounded-2xl shadow-2xl border flex flex-col animate-fadeInUp">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h3 className="font-bold text-gray-800">Chat Assistant</h3>
                        <button onClick={() => setChatOpen(false)} className="text-gray-500 hover:text-gray-700">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {chatMessages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-lg ${
                                    msg.type === 'user' 
                                        ? 'bg-blue-500 text-white' 
                                        : 'bg-gray-100 text-gray-800'
                                }`}>
                                    {msg.message}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                                    <div className="flex space-x-2">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="p-4 border-t">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                                placeholder="Type your message..."
                                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={handleChatSend}
                                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={() => setChatOpen(!chatOpen)} className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform transform hover:scale-110">
                <MessageCircle className="w-8 h-8" />
                {!chatOpen && <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>}
            </button>
        </>
    );
}

export default ChatBot;