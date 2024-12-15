import React, { useState } from 'react';
import { getChatbotResponse } from '../api'; // Import the API call function
import './Chatbot.css'; // Create your CSS file to style the chatbot UI

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to extract content from the page (adjust to your needs)
  const extractPageContent = () => {
    const content = document.querySelector('.page-content')?.innerText || document.body.innerText;
    return content;
  };

  // Handle sending a message and receiving a response
  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;

    // User message
    const userMessage = { sender: 'user', text: inputText };
    setMessages([...messages, userMessage]);

    // Extract content from page and send it to the API
    const pageContent = extractPageContent();
    setLoading(true);

    try {
      // Get the chatbot response based on the page content
      const botReply = await getChatbotResponse(pageContent);

      // Bot message
      const botMessage = { sender: 'bot', text: botReply };
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error getting response:", error);
      setMessages((prevMessages) => [...prevMessages, userMessage, { sender: 'bot', text: 'Sorry, I could not process your request.' }]);
    }

    setLoading(false);
    setInputText('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h3>Chatbot</h3>
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender === 'bot' ? 'bot' : 'user'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={handleSendMessage} disabled={loading}>
          {loading ? 'Processing...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
