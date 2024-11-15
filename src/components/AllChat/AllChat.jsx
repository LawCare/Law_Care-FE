import React from 'react';
import Image from 'next/image';
import manicon from '../../assets/icons/man icon.png';
import womanicon from '../../assets/icons/woman icon.png';
import inprogress from '../../assets/icons/in progress.png';
import end from '../../assets/icons/end.png';

const AllChat = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full p-4 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-extrabold text-blue-900">모든 채팅</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center bg-white rounded-lg p-4 border-2 border-custom-light-blue">
          <div className="flex-shrink-0 relative">
            <Image src={manicon} alt="Consultant 1" width={70} height={70} className="rounded-full" />
            <div className="absolute bottom-1 right-1">
              <Image src={inprogress} alt="inprogress" width={15} height={15} />
            </div>
          </div>
          <div className="ml-4 flex-grow">
            <h3 className="font-semibold text-gray-900">김 은 채</h3>
            <p className="text-sm text-gray-600">OO 전문상담가</p>
          </div>
          <span className="text-xs font-semibold self-end">...진행중</span>
        </div>

        <div className="flex items-center bg-white rounded-lg p-4">
          <div className="flex-shrink-0 relative ">
            <Image src={womanicon} alt="Consultant 2" width={70} height={70} className="rounded-full" />
            <div className="absolute bottom-1 right-1">
              <Image src={end} alt="end" width={15} height={15} />
            </div>
          </div>
          <div className="ml-4 flex-grow">
            <h3 className="font-semibold text-gray-900">창 다 은</h3>
            <p className="text-sm text-gray-600">OO 전문상담가</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllChat;
