import React, { useState, useEffect } from 'react';
import { 
  TRANSLATIONS,
  LANGUAGES,
  LANGUAGE_LABELS,
  HEADER_MESSAGE,
  INITIAL_GREETING
} from './ChatData';

const LegalChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES.ZH);
  const [dummyIndex, setDummyIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // 컴포넌트가 마운트될 때 초기 인사말을 1초 후에 표시
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([{
        id: 0,
        sender: 'admin',
        messages: INITIAL_GREETING,
        timestamp: new Date()
      }]);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const findMatchingResponse = (text) => {
    const keywords = Object.keys(TRANSLATIONS.counselor);
    const matchedKeyword = keywords.find((keyword) => text.includes(keyword));
    return TRANSLATIONS.counselor[matchedKeyword] || TRANSLATIONS.counselor['default'];
  };

  const handleSendMessage = () => {
    if (!inputText.trim() && dummyIndex >= TRANSLATIONS.worker.length) {
      setDummyIndex(0);
    }

    let messageToSend;
    if (inputText.trim()) {
      messageToSend = {
        ko: inputText,
        zh: inputText,
        vi: inputText,
        th: inputText
      };
    } else {
      messageToSend = TRANSLATIONS.worker[dummyIndex];
      setDummyIndex((prevIndex) => (prevIndex + 1) % TRANSLATIONS.worker.length);
    }

    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      messages: messageToSend,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputText('');

    const response = findMatchingResponse(messageToSend.ko);

    setTimeout(() => {
      const autoResponse = {
        id: messages.length + 2,
        sender: 'admin',
        messages: response,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, autoResponse]);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 h-screen flex flex-col">
      <div className="text-center space-y-1">
        <p className="text-gray-500 text-sm">{HEADER_MESSAGE.ko}</p>
        <p className="text-gray-400 text-sm">{HEADER_MESSAGE[selectedLanguage]}</p>
      </div>

      <div className="flex justify-center mb-4">
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="w-48 p-2 border rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.values(LANGUAGES).map((lang) => (
            <option key={lang} value={lang}>
              {LANGUAGE_LABELS[lang].ko} / {LANGUAGE_LABELS[lang].native}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-md p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-100' : 'bg-white border'}`}>
              <div className="space-y-2">
                <p className="break-words text-gray-900">{message.messages.ko}</p>
                <p className="break-words text-gray-600 border-t pt-2">{message.messages[selectedLanguage]}</p>
              </div>
              <div className="text-xs text-gray-400 mt-2">{message.timestamp.toLocaleTimeString()}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-white border-t p-4">
        <div className="flex items-center space-x-2">
          <button
            className="p-2 text-gray-500 hover:bg-gray-100 rounded"
            onClick={handleSendMessage}
            title="더미 데이터 사용"
            disabled={isLoading}
          >
            +
          </button>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
            placeholder="메시지를 입력하세요..."
            className="flex-1 p-2 border rounded-lg"
            disabled={isLoading}
          />
          <button 
            onClick={handleSendMessage} 
            className="p-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
            disabled={isLoading}
          >
            전송
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalChat;