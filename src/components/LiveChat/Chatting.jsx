import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, LANGUAGES, LANGUAGE_LABELS, HEADER_MESSAGE, INITIAL_GREETING } from './ChatData';
import { Smile } from 'lucide-react';
import Image from 'next/image';
import addIcon from '@/assets/icons/addition.png';
import send from '@/assets/icons/send.png';
import Aa from '@/assets/icons/Aa.png';

const Chatting = ({ onKeywordClick }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [noteText, setNoteText] = useState('');
  const [sourceLang, setSourceLang] = useState('ko');
  const [targetLang, setTargetLang] = useState('zh');
  const [dummyIndex, setDummyIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeInputTab, setActiveInputTab] = useState('chat');
  const [isMobile, setIsMobile] = useState(false);

  const languages = {
    ko: '한국어',
    zh: '中文',
    vi: 'Tiếng Việt',
    th: 'ภาษาไทย'
  };

  const transformTextToLinks = (text) => {
    const keywordToComponentMap = {
      퇴직금: 'SeverancePay',
      기본급: 'BasicSalary',
      근로계약서: 'EmploymentContract',
      명세서: 'Specification'
    };

    const regex = new RegExp(`(${Object.keys(keywordToComponentMap).join('|')})`, 'g');

    return text.split(regex).map((part, index) => {
      if (keywordToComponentMap[part]) {
        return (
          <span
            key={index}
            className="text-blue-500 underline cursor-pointer"
            onClick={() => onKeywordClick(keywordToComponentMap[part])}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

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

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <  768);
    };
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  });

  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
  };

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

    const messageToSend = {
      ko: textToSend,
      zh: TRANSLATIONS.worker[dummyIndex].zh,
      vi: TRANSLATIONS.worker[dummyIndex].vi,
      th: TRANSLATIONS.worker[dummyIndex].th
    };
    setDummyIndex((prevIndex) => (prevIndex + 1) % TRANSLATIONS.worker.length);

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

  const handleFileUpload = () => {
    console.log('File upload clicked');
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* 언어 선택 영역*/}
      <div className="max-w-xl mx-auto p-4 pb-0">
        <div className=" items-center space-x-2 text-md rounded-lg border border-gray-400 bg-white">
          <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)} className="flex-1 py-1 rounded-lg">
            {Object.entries(languages).map(([code, name]) => (
              <option key={code} value={code} className="text-center">
                {name}
              </option>
            ))}
          </select>

          <button
            onClick={handleSwap}
            className="p-1 mt-1 rounded-full hover:bg-gray-100 border border-gray-200"
            aria-label="Swap languages"
          >
            <svg
              className="w-4 h-4 text-gray-600 text-center "
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 7h12M8 7l4-4M8 7l4 4m4 4H4m16 0l-4-4m4 4l-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)} className="flex-auto rounded-lg">
            {Object.entries(languages).map(([code, name]) => (
              <option key={code} value={code} className="text-center">
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* <div className="mt-2 text-center text-md text-slate-900">
          {languages[sourceLang]} - {languages[targetLang]}
        </div> */}
      </div>
      <div className="flex-none p-4 pt-1 mt-3">
        <div className="text-center space-y-1">
          <p className="text-gray-500 text-sm">{HEADER_MESSAGE.ko}</p>
          <p className="text-gray-500 text-sm">{HEADER_MESSAGE.targetLang}</p>
          <p className="text-gray-400 text-sm">{HEADER_MESSAGE[targetLang]}</p>
        </div>
      </div>

      <div className="flex flex-col h-[550px]">
        {/* 채팅 영역 - 스크롤 가능 */}
        <div className="flex-1 overflow-y-scroll px-4 space-y-4 min-h-[400px] max-h-[600px]">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-md p-3  rounded-2xl ${
                  message.sender === 'user'
                    ? message.type === 'chat'
                      ? 'bg-blue-100'
                      : 'bg-green-100'
                    : 'bg-white border'
                }`}
              >
                <div className="space-y-2">
                  <p className="break-words text-gray-900">{transformTextToLinks(message.messages[sourceLang])}</p>
                  {message.type === 'chat' && targetLang !== sourceLang && (
                    <p className="break-words text-gray-600 border-t pt-2">{message.messages[targetLang]}</p>
                  )}
                </div>
              </div>
              {/* 시간 표출 코드 */}
              {/* <div className="text-xs text-gray-400 mt-2 self-end">{message.timestamp.toLocaleTimeString()}</div> */}
            </div>
          ))}
        </div>

        <div className="flex-none"></div>
      </div>

      <div className="px-2 items-center space-x-3">
        <div className="relative flex items-center space-x-3">
          <div className="absolute left-4 bottom-2 flex items-center space-x-2 z-10">
            <button
              onClick={handleFileUpload}
              className="p-1 ml-[-3px] mb-[-8px] text-gray-500 hover:bg-gray-100 rounded"
              disabled={isLoading}
              title="파일 첨부"
            >
              <div className="w-7 h-7">
                <Image src={addIcon} alt="addIcon" width={50} height={50} />
              </div>
            </button>
          </div>

          {isMobile ? (
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
              placeholder="메시지를 입력하세요..."
              className="w-full pl-28 p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
              disabled={isLoading}
            />
          ) : (
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
              placeholder="메시지를 입력하세요..."
              className="w-full pl-4 p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 md:resize-y resize-none"
              disabled={isLoading}
            />
          )}
          <button
            onClick={handleSendMessage}
            className="p-0 mt-14 text-blue-500 hover:bg-blue-50 rounded-lg disabled:text-gray-300"
            disabled={isLoading || (!inputText.trim() && !noteText.trim())}
            title="전송"
          >
            <div className="w-7 h-7">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatting;
