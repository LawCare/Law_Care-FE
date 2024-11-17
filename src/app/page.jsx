'use client';
import React, { useState } from 'react';
import AllChatPage from './(chat)/all-chat/page';
import ChatInfoPage from './(chat)/chat-info/page';
import ChattingPage from './(chat)/live-chat/page';
import SearchBarPage from './(chat)/search-bar/page';
import SideBarPage from './(chat)/side-bar/page';

const Chatpage = () => {
  const [showSeverancePay, setShowSeverancePay] = useState(false);

  const handleSeverancePayClick = () => {
    setShowSeverancePay(true);
  };

  const handleBackToChatInfo = () => {
    setShowSeverancePay(false);
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* 사이드바 (데스크탑 전용) */}
      <aside
        className="lg:w-20 lg:h-full lg:fixed lg:left-0 lg:top-0 lg:block hidden"
        // 데스크탑에서만 사이드바가 왼쪽에 보이도록 `lg:block` 추가, 모바일에서는 숨김 처리 `hidden`
      >
        <SideBarPage />
      </aside>

      {/* 모바일 하단 네비게이션 */}
      <div
        className="lg:hidden fixed bottom-0 left-0 w-full bg-white flex justify-around py-2 border-t"
        // 모바일에서 하단 네비게이션이 나타나도록 설정 (`lg:hidden`으로 데스크탑에서는 숨김 처리)
      >
        <SideBarPage />
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex flex-col flex-grow lg:ml-20">
        {/* `lg:ml-20` 추가: 데스크탑에서만 사이드바 공간만큼 마진 추가 */}
        <header className="w-full">
          <SearchBarPage />
        </header>

        <div className="flex flex-grow">
          <section className="w-full lg:w-[18%] border-r">
            {/* `lg:w-[18%]` 추가: 데스크탑에서만 넓이를 18%로 설정 */}
            <AllChatPage />
          </section>

          <section className="flex-grow">
            <ChattingPage onSeverancePayClick={handleSeverancePayClick} />
          </section>

          <aside className="hidden lg:block w-[30%] border-l">
            {/* `hidden lg:block` 추가: 데스크탑에서만 채팅 정보 패널 표시 */}
            <ChatInfoPage showSeverancePay={showSeverancePay} onBack={handleBackToChatInfo} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
