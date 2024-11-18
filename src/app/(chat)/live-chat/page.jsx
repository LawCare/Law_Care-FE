'use client';
import Chatting from '@/components/LiveChat/Chatting';

const ChattingPage = ({ onKeywordClick }) => {
  return (
    <div>
      <Chatting onKeywordClick={onKeywordClick} />
    </div>
  );
};

export default ChattingPage;
