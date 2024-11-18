import React from 'react';
import Image from 'next/image';
import manicon from '../../assets/icons/man icon.png';
import womanicon from '../../assets/icons/woman icon.png';
import inprogress from '../../assets/icons/in progress.png';
import end from '../../assets/icons/end.png';

const AllChat = () => {
  return (
    <div className="hidden lg:block min-h-screen w-full">
      <div className="flex justify-between items-center px-5 py-4 bg-custom-sky-blue2 ">
        <h2 className="text-lg font-extrabold text-blue-900 w-full">모든 채팅</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center bg-white rounded-lg py-3 px-4">
          <div className="flex-shrink-0 relative">
            <Image src={manicon} alt="Consultant 1" width={70} height={70} className="rounded-full" />
            <div className="absolute bottom-1 right-1">
              <Image src={inprogress} alt="inprogress" width={15} height={15} />
            </div>
          </div>
          <div className="ml-4 flex-grow">
            <h3 className="font-semibold text-[14px] text-gray-900">김은채</h3>
            <p className="text-[12px] text-gray-600">노동법 전문상담가</p>
          </div>
          <div className="text-right">
            <span className="block text-[10px] text-gray-500 mb-1">오후 7시 30분</span>
            <span className="text-[9px] font-semibold px-2 py-1 bg-custom-sky-blue3 text-custom-light-blue rounded-full">
              진행 중
            </span>
          </div>
        </div>

        <div className="flex items-center bg-white rounded-lg py-3 px-4">
          <div className="flex-shrink-0 relative">
            <Image src={womanicon} alt="Consultant 2" width={70} height={70} className="rounded-full" />
            <div className="absolute bottom-1 right-1">
              <Image src={end} alt="end" width={15} height={15} />
            </div>
          </div>
          <div className="ml-4 flex-grow">
            <h3 className="font-semibold text-[14px] text-gray-900">창다은</h3>
            <p className="text-[12px] text-gray-600">임금체불 전문상담가</p>
          </div>
          <div className="text-right">
            <span className="block text-[10px] text-gray-500 mb-1">오전 10시</span>
            <span className="text-[9px] font-semibold px-2 py-1 bg-custom-gray text-custom-dark-gray rounded-full">
              보류 중
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllChat;
