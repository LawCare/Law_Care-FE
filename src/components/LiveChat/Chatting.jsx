import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, LANGUAGES, LANGUAGE_LABELS, HEADER_MESSAGE, INITIAL_GREETING } from './ChatData';
import { Smile } from 'lucide-react';
import Image from 'next/image';
import addIcon from '@/assets/icons/addition.png';

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
    <div className="h-[93vh] flex flex-col bg-gray-50">
      {/* 언어 선택 영역*/}
      <div className="max-w-xl mx-auto pb-6 pt-6">
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
      <div className="flex-none px-4 pt-2 pb-4">
        <div className="text-center space-y-1">
          <p className="text-gray-500 text-sm">{HEADER_MESSAGE.ko}</p>
          <p className="text-gray-500 text-sm">{HEADER_MESSAGE.targetLang}</p>
          <p className="text-gray-400 text-sm">{HEADER_MESSAGE[targetLang]}</p>
        </div>
      </div>

      <div className="flex flex-col lg:h-[600px] h-[300px]">
        {/* 채팅 영역 */}
        <div className="flex-1 overflow-y-scroll px-2 space-y-3 min-h-[480px] max-h-[520px]">
  {messages.map((message) => (
    <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[280px] p-2 rounded-2xl border-t-2 border ${
          message.sender === 'user'
            ? message.type === 'chat'
              ? 'bg-blue-50'
              : 'bg-green-100'
            : 'bg-white border'
        }`}
      >
        <div className="space-y-1.5">
          <p className="break-words text-gray-900 text-sm">
            {transformTextToLinks(message.messages[sourceLang])}
          </p>
          {message.type === 'chat' && targetLang !== sourceLang && (
            <p className="break-words text-gray-600 border-t pt-1.5 text-xs">
              {message.messages[targetLang]}
            </p>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

        <div className="flex-none"></div>
      </div>

      <div className="px-1.5 items-center space-x-2">
  <div className="relative flex items-center lg:space-x-2 space-x-4 mt-4">
    <div className="absolute left-3 bottom-1.5 flex items-center space-x-1.5 z-10">
      <button
        onClick={handleFileUpload}
        className="lg:p-0.5 lg:ml-[-2px] lg:mb-[-6px] ml-[-2px] text-gray-500 hover:bg-gray-100 rounded"
        disabled={isLoading}
        title="파일 첨부"
      >
        <div className="lg:w-6 lg:h-6 w-5 h-5 ">
          <Image src={addIcon} alt="addIcon" width={40} height={40} />
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
        className="w-full pl-20 p-1.5 border rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 h-8"
        disabled={isLoading}
      />
    ) : (
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
        placeholder="메시지를 입력하세요..."
        className="w-[90%] pl-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
        disabled={isLoading}
      />
    )}
    <button
      onClick={handleSendMessage}
      className=" lg:mt-10 p-0 mt-1 text-blue-500 hover:bg-blue-50 rounded-lg disabled:text-gray-300"
      disabled={isLoading || (!inputText.trim() && !noteText.trim())}
      title="전송"
    >
      <div className="w-6 h-6">
        <svg viewBox="0 0 24 24" fill="currentColor" className="lg:w-full lg:h-full ">
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
