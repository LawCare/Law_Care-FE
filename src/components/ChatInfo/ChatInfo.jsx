import Image from 'next/image';
import React, { useState } from 'react';
import manicon from '../../assets/icons/man icon.png';
import inprogress from '../../assets/icons/in progress.png';
import ExplainWord from './ExplainWord';

const ChatInfo = () => {
  const [showExplainWord, setShowExplainWord] = useState(false);

  return (
    <div className=" w-100 p-4 min-h-screen rounded-lg ">
      {showExplainWord ? (
        <ExplainWord onBack={() => setShowExplainWord(false)} />
      ) : (
        <>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-custom-navy2">채팅방 정보</h2>
            <p className="text-sm">방 번호: 1234</p>
            <p className="text-sm">주제: 임금체불 법안 상담</p>
          </div>

          <div className="bg-white p-4 rounded-lg ">
            <div className="space-y-4">
              <div className="flex flex-col items-center bg-white rounded-lg p-4">
                <div className="flex-shrink-0 relative">
                  <Image src={manicon} alt="Consultant 1" width={70} height={70} className="rounded-full" />
                  <div className="absolute bottom-1 right-1">
                    <Image src={inprogress} alt="inprogress" width={15} height={15} />
                  </div>
                </div>
                <p className="text-sm font-semibold mt-2">김 은 채</p>
                <p className="text-xs text-gray-500">○○ 전문상담가</p>
                <div className="mt-2 text-xs text-gray-500 text-center">
                  <p>이메일: example@example.com</p>
                  <p>전화: 010-1234-5678</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="bg-custom-blue text-white font-semibold text-sm mb-2 p-1 rounded inline-block">노트</h3>
            <p className="text-sm">
              <span className="text-blue-500 cursor-pointer underline" onClick={() => setShowExplainWord(true)}>
                • 퇴직금
              </span>
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="bg-custom-blue text-white font-semibold text-sm mb-2 p-1 rounded inline-block">첨부 파일</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatInfo;
