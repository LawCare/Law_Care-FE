'use client';
import React, { useState } from 'react';
import AllChatPage from './(chat)/all-chat/page';
import ChatInfoPage from './(chat)/chat-info/page';
import ChattingPage from './(chat)/live-chat/page';
import SearchBarPage from './(chat)/search-bar/page';
import SideBarPage from './(chat)/side-bar/page';
import BasicSalary from '../components/ChatInfo/basicSalary';
import EmploymentContract from '../components/ChatInfo/employmentxContract';
import Specification from '../components/ChatInfo/specification';
import SeverancePay from '../components/ChatInfo/severancePay';

const Chatpage = () => {
  const [currentInfoComponent, setCurrentInfoComponent] = useState(null);

  const handleKeywordClick = (componentName) => {
    setCurrentInfoComponent(componentName);
  };

  const handleBackToChatInfo = () => {
    setCurrentInfoComponent(null);
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row ">
      <aside className="lg:w-20 lg:h-full lg:fixed lg:left-0 lg:top-0 lg:block hidden">
        <SideBarPage />
      </aside>

      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white flex justify-around py-2 border-t">
        <SideBarPage />
      </div>

      <div className="flex flex-col flex-grow lg:ml-20">
        <header className="w-full">
          <SearchBarPage />
        </header>

        <div className="flex flex-grow">
          <section className="w-full md:w-[18%] border-r hidden md:block">
            <AllChatPage />
          </section>

          <section className="flex-grow">
            <ChattingPage onKeywordClick={handleKeywordClick} />
          </section>

          <aside className="hidden lg:block w-[30%] border-l">
            {currentInfoComponent === 'SeverancePay' && <SeverancePay onBack={handleBackToChatInfo} />}
            {currentInfoComponent === 'BasicSalary' && <BasicSalary onBack={handleBackToChatInfo} />}
            {currentInfoComponent === 'EmploymentContract' && <EmploymentContract onBack={handleBackToChatInfo} />}
            {currentInfoComponent === 'Specification' && <Specification onBack={handleBackToChatInfo} />}
            {!currentInfoComponent && <ChatInfoPage onKeywordClick={handleKeywordClick} />}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
