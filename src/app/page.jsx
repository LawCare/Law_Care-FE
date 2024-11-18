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
  // 상태 관리
  const [showSeverancePay, setShowSeverancePay] = useState(false);
  const [showBasicSalary, setShowBasicSalary] = useState(false);
  const [showEmploymentContract, setShowEmploymentContract] = useState(false);
  const [showSpecification, setShowSpecification] = useState(false);

  // 핸들러 함수
  const handleSeverancePayClick = () => {
    setShowSeverancePay(true);
    resetOtherStates('SeverancePay');
  };

  const handleBasicSalaryClick = () => {
    setShowBasicSalary(true);
    resetOtherStates('BasicSalary');
  };

  const handleEmploymentContractClick = () => {
    setShowEmploymentContract(true);
    resetOtherStates('EmploymentContract');
  };

  const handleSpecificationClick = () => {
    setShowSpecification(true);
    resetOtherStates('Specification');
  };

  const resetOtherStates = (currentComponent) => {
    if (currentComponent !== 'SeverancePay') setShowSeverancePay(false);
    if (currentComponent !== 'BasicSalary') setShowBasicSalary(false);
    if (currentComponent !== 'EmploymentContract') setShowEmploymentContract(false);
    if (currentComponent !== 'Specification') setShowSpecification(false);
  };

  const handleBackToChatInfo = () => {
    setShowSeverancePay(false);
    setShowBasicSalary(false);
    setShowEmploymentContract(false);
    setShowSpecification(false);
  };

  return (
    <div className="h-screen flex">
      <aside className="w-20 h-full fixed left-0 top-0">
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
            {showSeverancePay && <SeverancePay onBack={handleBackToChatInfo} />}
            {showBasicSalary && <BasicSalary onBack={handleBackToChatInfo} />}
            {showEmploymentContract && <EmploymentContract onBack={handleBackToChatInfo} />}
            {showSpecification && <Specification onBack={handleBackToChatInfo} />}
            {!showSeverancePay && !showBasicSalary && !showEmploymentContract && !showSpecification && (
              <ChattingPage
                onSeverancePayClick={handleSeverancePayClick}
                onBasicSalaryClick={handleBasicSalaryClick}
                onEmploymentContractClick={handleEmploymentContractClick}
                onSpecificationClick={handleSpecificationClick}
              />
            )}
          </section>

          <aside className="w-[30%] border-l">
            <ChatInfoPage
              onSeverancePayClick={handleSeverancePayClick}
              onBasicSalaryClick={handleBasicSalaryClick}
              onEmploymentContractClick={handleEmploymentContractClick}
              onSpecificationClick={handleSpecificationClick}
            />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
