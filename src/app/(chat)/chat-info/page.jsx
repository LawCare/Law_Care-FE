'use client';
import React, { useState } from 'react';
import { Tabs } from 'antd';
import ChatInfo from '@/components/ChatInfo/ChatInfo';
import ExplainWord from '@/components/ChatInfo/ExplainWord';

const ChatInfoPage = () => {
  const [activeTabKey, setActiveTabKey] = useState('1'); // 초기 활성 탭은 ChatInfo

  const handleTabChange = (key) => {
    setActiveTabKey(key); // 탭 변경 시 activeTabKey 업데이트
  };

  return (
    <Tabs activeKey={activeTabKey} onChange={handleTabChange}>
      <Tabs.TabPane tab="Chat Info" key="1">
        <ChatInfo onExplainClick={() => setActiveTabKey('2')} /> {/* 퇴직금 클릭 시 ExplainWord로 이동 */}
      </Tabs.TabPane>
      <Tabs.TabPane tab="Explain Word" key="2">
        <ExplainWord />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default ChatInfoPage;
