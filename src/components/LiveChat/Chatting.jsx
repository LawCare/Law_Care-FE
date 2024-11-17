import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, LANGUAGES, LANGUAGE_LABELS, HEADER_MESSAGE, INITIAL_GREETING } from './ChatData';
import { Smile } from 'lucide-react';
import Image from 'next/image';
import addIcon from '@/assets/icons/addition.png';
import send from '@/assets/icons/send.png';
import Aa from '@/assets/icons/Aa.png';

const Chatting = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [noteText, setNoteText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES.ZH);
  const [dummyIndex, setDummyIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeInputTab, setActiveInputTab] = useState('chat');
  const [isKorean, setIsKorean] = useState(true);

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
      messageToSend = {
        ko: TRANSLATIONS.worker[dummyIndex].ko,
        zh: TRANSLATIONS.worker[dummyIndex].zh,
        vi: TRANSLATIONS.worker[dummyIndex].vi,
        th: TRANSLATIONS.worker[dummyIndex].th
      };
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
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="flex justify-center my-4">
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
      <div className="flex-none p-4">
        <div className="text-center space-y-1">
          <p className="text-gray-500 text-sm">{HEADER_MESSAGE.ko}</p>
          <p className="text-gray-400 text-sm">{HEADER_MESSAGE[selectedLanguage]}</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-4">
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
                {message.type === 'chat' && selectedLanguage !== 'ko' && (
                  <p className="break-words text-gray-600 border-t pt-2">{message.messages[selectedLanguage]}</p>
                )}
              </div>
              <div className="text-xs text-gray-400 mt-2">{message.timestamp.toLocaleTimeString()}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-none border-t bg-white">
        <div className="flex border-b">
          <button
            className={`px-4 py-2 text-sm ${
              activeInputTab === 'chat' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveInputTab('chat')}
          >
            채팅
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
                <Image src={addIcon} alt="addfile" width={20} height={20} />
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
                {/* <Image src={Aa} alt="togglelanguage" width={20} height={20} /> */}
                <span className="ml-1 text-sm">{isKorean ? '한' : 'A'}</span>
              </button>
            </div>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
              placeholder="메시지를 입력하세요..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg disabled:text-gray-300"
              disabled={isLoading || (!inputText.trim() && !noteText.trim())}
              title="전송"
            >
              <Image src={send} alt="send" width={30} height={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatting;
