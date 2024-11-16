import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, LANGUAGES, LANGUAGE_LABELS, HEADER_MESSAGE, INITIAL_GREETING } from './ChatData';
import { Globe, Paperclip, Send, Smile } from 'lucide-react';

const ChattingPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [noteText, setNoteText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES.ZH);
  const [dummyIndex, setDummyIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeInputTab, setActiveInputTab] = useState('chat');
  const [isKorean, setIsKorean] = useState(true);

  // INITIAL_GREETING을 다국어 형태로 표시
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([
        {
          id: 0,
          sender: 'admin',
          messages: {
            ko: INITIAL_GREETING.ko || INITIAL_GREETING,
            zh: INITIAL_GREETING.zh || INITIAL_GREETING,
            vi: INITIAL_GREETING.vi || INITIAL_GREETING,
            th: INITIAL_GREETING.th || INITIAL_GREETING
          },
          timestamp: new Date(),
          type: 'chat'
        }
      ]);
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
    const textToSend = activeInputTab === 'chat' ? inputText : noteText;

    if (!textToSend.trim() && dummyIndex >= TRANSLATIONS.worker.length) {
      setDummyIndex(0);
      return;
    }

    let messageToSend;
    if (textToSend.trim()) {
      messageToSend = {
        ko: textToSend,
        zh: textToSend,
        vi: textToSend,
        th: textToSend
      };
    } else {
      messageToSend = TRANSLATIONS.worker[dummyIndex];
      setDummyIndex((prevIndex) => (prevIndex + 1) % TRANSLATIONS.worker.length);
    }

    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      messages: messageToSend,
      timestamp: new Date(),
      type: activeInputTab
    };

    setMessages([...messages, newMessage]);

    if (activeInputTab === 'chat') {
      setInputText('');
    } else {
      setNoteText('');
    }

    if (activeInputTab === 'chat') {
      const response = findMatchingResponse(messageToSend.ko);
      setTimeout(() => {
        const autoResponse = {
          id: messages.length + 2,
          sender: 'admin',
          messages: response,
          timestamp: new Date(),
          type: 'chat'
        };
        setMessages((prev) => [...prev, autoResponse]);
      }, 1000);
    }
  };

  const handleToggleLanguage = () => {
    setIsKorean(!isKorean);
  };

  const handleFileUpload = () => {
    console.log('File upload clicked');
  };

  const handleEmojiClick = () => {
    console.log('Emoji clicked');
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 h-screen flex flex-col">
      <div className="text-center space-y-1 mb-4">
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
            <div
              className={`max-w-md p-3 rounded-lg ${
                message.sender === 'user'
                  ? message.type === 'chat'
                    ? 'bg-blue-100'
                    : 'bg-green-100'
                  : 'bg-white border'
              }`}
            >
              <div className="space-y-2">
                <p className="break-words text-gray-900">{message.messages.ko}</p>
                {message.type === 'chat' && (
                  <p className="break-words text-gray-600 border-t pt-2">
                    {message.messages[selectedLanguage]}
                  </p>
                )}
              </div>
              <div className="text-xs text-gray-400 mt-2">{message.timestamp.toLocaleTimeString()}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-white border rounded-lg">
        <div className="flex border-b">
          <button
            className={`px-4 py-2 text-sm ${
              activeInputTab === 'chat' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveInputTab('chat')}
          >
            채팅
          </button>
          <button
            className={`px-4 py-2 text-sm ${
              activeInputTab === 'note' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveInputTab('note')}
          >
            노트
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <button
                onClick={handleFileUpload}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded"
                disabled={isLoading}
                title="파일 첨부"
              >
                <Paperclip size={20} />
              </button>
              <button
                onClick={handleEmojiClick}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded"
                disabled={isLoading}
                title="이모티콘"
              >
                <Smile size={20} />
              </button>
              <button
                onClick={handleToggleLanguage}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded"
                disabled={isLoading}
                title="한/영 전환"
              >
                <Globe size={20} />
                <span className="ml-1 text-sm">{isKorean ? '한' : 'A'}</span>
              </button>
            </div>
            {activeInputTab === 'chat' ? (
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                placeholder="메시지를 입력하세요..."
                className="flex-1 p-2 border rounded-lg"
                disabled={isLoading}
              />
            ) : (
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && !isLoading && handleSendMessage()}
                placeholder="노트를 작성하세요..."
                className="flex-1 p-2 border rounded-lg resize-none h-24"
                disabled={isLoading}
              />
            )}
            <button
              onClick={handleSendMessage}
              className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg disabled:text-gray-300"
              disabled={isLoading || (!inputText.trim() && !noteText.trim())}
              title="전송"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChattingPage;