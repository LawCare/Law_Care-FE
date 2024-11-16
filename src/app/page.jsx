'use client';
import React, { useState } from 'react';
import AllChatPage from './(chat)/all-chat/page';
import ChatInfoPage from './(chat)/chat-info/page';
import ChattingPage from './(chat)/live-chat/page';
import SearchBarPage from './(chat)/search-bar/page';
import SideBarPage from './(chat)/side-bar/page';

const Chatpage = () => {
  const [showExplainWord, setShowExplainWord] = useState(false);

  const handleExplainWordClick = () => {
    setShowExplainWord(true);
  };

  const handleBackToChatInfo = () => {
    setShowExplainWord(false);
  };

  return (
    <div className="h-screen flex">
      <aside className="w-20 h-full bg-blue-500 fixed left-0 top-0">
        <SideBarPage />
      </aside>

      <div className="flex flex-col flex-grow ml-20">
        <header className="w-full">
          <SearchBarPage />
        </header>

        <div className="flex flex-grow">
          <section className="w-[18%] border-r">
            <AllChatPage />
          </section>

          <section className="flex-grow">
            <ChattingPage onExplainWordClick={handleExplainWordClick} />
          </section>

          <aside className="w-[30%] border-l">
            <ChatInfoPage showExplainWord={showExplainWord} onBack={handleBackToChatInfo} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
