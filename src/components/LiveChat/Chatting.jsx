import Image from 'next/image';
import React from 'react';
import manicon from '../../assets/icons/man icon.png';

const Chatting = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50">
      <div className="text-center text-gray-500 text-sm mb-16">
        상담을 시작하였습니다. 자동번역이 적용됩니다.
        <br />
        开始咨询了。应用自动翻译。
      </div>

      <div className="space-y-24 p-1">
        <div className="flex items-start ">
          <Image src={manicon} alt="User" width={40} className='m-1' />
          <div className="flex flex-col">
            <div className="bg-white rounded-lg p-4 shadow-sm max-w-xs">
              <p>안녕하세요!</p>
              <p>你好!</p>
            </div>
            <span className="text-xs text-gray-400 mt-1">읽음 1분 전</span>
          </div>
        </div>

        <div className=" items-start justify-end ">
          <div className="flex flex-col items-end">
            <div className="bg-blue-100 rounded-md p-2 shadow-sm max-w-xs">
              <p>你好，我没有看到我退休金，受到了不公平的待遇，需要帮助。</p>
              <p>안녕하세요. 퇴직금을 못 받고 부당한 대우를 받고 있어요. 도움이 필요해요.</p>
            </div>
            <span className="text-xs text-gray-400 mt-1">읽음 1분 전</span>
          </div>
        </div>

        <div className="flex items-start">
          <Image src={manicon} alt="User" width={40} className='m-1'/>
          <div className="flex flex-col">
            <div className="bg-white rounded-lg p-4 shadow-sm max-w-xs">
              <p>퇴직금과 미지급과 부당 대우에 대한 상황을 자세히 알려주시면 법적 대응 방안을 함께 마련하겠습니다.</p>
              <p>如果详细告知未支付退休金和不当待遇的情况,将共同制定法律应对方案。</p>
            </div>
            <span className="text-xs text-gray-400 mt-1 mb-5">읽음 1분 전</span>
          </div>
        </div>

      </div>
          <div className=" bottom-0 left-0 right-0 bg-white border-t">
            <div className="max-w-2xl mx-auto flex items-center">
              <button className="p-2 text-gray-500">
                <span className="text-2xl">+</span>
              </button>
              <input
                type="text"
                placeholder="메시지를 입력..."
                className="flex-1 p-2 border-none outline-none bg-transparent"
              />
              <div className="space-x-2">
                <button className="p-2 text-gray-500">Aa</button>
                <button className="p-2 text-gray-500">😊</button>
                <button className="p-2 text-blue-500">
                  <span className="transform rotate-45 inline-block">▶</span>
                </button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Chatting;
