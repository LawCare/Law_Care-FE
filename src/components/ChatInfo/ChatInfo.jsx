import Image from 'next/image';
import React, { useState } from 'react';
import manicon from '../../assets/icons/man icon.png';
import inprogress from '../../assets/icons/in progress.png';
import Note from '../../assets/icons/Note.png';
import arrow from '../../assets/icons/arrow.png';
import Attachfile from '../../assets/icons/Attachfile.png';
import pdf from '../../assets/icons/pdf.png';
import Add from '../../assets/icons/Add.png';
import SeverancePay from './severancePay';

const ChatInfo = () => {
  const [showSeverancePay, setShowSeverancePay] = useState(false);

  return (
    <div className=" w-100 min-h-screen rounded-lg ">
      {showSeverancePay ? (
        <SeverancePay onBack={() => setShowSeverancePay(false)} />
      ) : (
        <>
          <div className="mb-4 flex flex-col px-5 py-4 bg-custom-sky-blue2">
            <h2 className="text-lg font-semibold text-custom-navy2">채팅방 정보</h2>
            <p className="text-sm mt-2">방 번호: 1234</p>
            <p className="text-sm">주제: 임금체불 법안 상담</p>
          </div>

          <div className="bg-white rounded-lg ">
            <div className="space-y-4">
              <div className="flex flex-col items-center bg-white rounded-lg p-4 ">
                <div className="flex-shrink-0 relative">
                  <Image src={manicon} alt="Consultant 1" width={70} height={70} className="rounded-full" />
                  <div className="absolute bottom-1 right-1">
                    <Image src={inprogress} alt="inprogress" width={15} height={15} />
                  </div>
                </div>
                <div className="mt-4 border border-gray-300 rounded-lg p-8 text-center w-full mx-auto">
                  <p className="text-sm font-semibold mt-2">김 은 채</p>
                  <p className="text-xs text-gray-500">○○ 전문상담가</p>
                  <div className="mt-2 text-xs text-gray-500 text-center">
                    <p>이메일: example@example.com</p>
                    <p>전화: 010-1234-5678</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <Image src={Note} alt="Note" width={15} height={15} />
                <h3 className=" font-semibold text-[14px]  p-1 ">용어노트</h3>
              </div>
              <button className="px-3 py-1 font-semibold bg-custom-sky-blue2 text-gray-500 rounded-full">편집</button>
            </div>

            <div
              className=" border border-gray-150 rounded-lg flex items-center justify-between p-2 mb-2 cursor-pointer"
              onClick={() => setShowSeverancePay(true)}
            >
              <span className="text-sm">퇴직금</span>
              <Image src={arrow} alt="arrow" width={15} height={15} />
            </div>

            <div
              className=" border border-gray-150 rounded-lg flex items-center justify-between p-2 mb-2 cursor-pointer"
              onClick={() => setShowSeverancePay(true)}
            >
              <span className="text-sm">임금</span>
              <Image src={arrow} alt="arrow" width={15} height={15} />
            </div>
          </div>

          <div className="bg-white p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <Image src={Attachfile} alt="Attach file" width={8} height={8} />
                <h3 className=" font-semibold text-[14px]  p-1 ">첨부파일</h3>
              </div>
            </div>
            <div className="border border-gray-150 rounded-lg flex items-center p-3 mb-2 text-sm cursor-pointer">
              <Image src={pdf} alt="PDF Icon" width={20} height={20} className="mr-2" />
              <span className="text-gray-800">퇴직금</span>
            </div>
            <button className="flex items-center justify-center w-full py-2 mt-4 text-custom-light-blue border border-custom-light-blue rounded-lg">
              <Image src={Add} alt="Add Icon" width={20} height={20} className="mr-2" />
              <span className="font-semibold">첨부파일 추가하기</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatInfo;
