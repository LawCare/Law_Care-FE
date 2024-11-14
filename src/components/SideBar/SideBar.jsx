import React from 'react';

const SideBar = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-blue-500 to-blue-900 h-screen w-16 space-y-4 py-4">
      <button
        className="p-2 rounded-full hover:bg-blue-300 bg-cover bg-center"
        style={{ backgroundImage: "url('/path/to/home.png')" }}
      >
        {/* 아이콘 이미지가 배경으로 설정됨 */}
      </button>
      <button
        className="p-2 rounded-full hover:bg-blue-300 bg-cover bg-center"
        style={{ backgroundImage: "url('/path/to/chat.png')" }}
      >
        {/* 다른 아이콘 이미지 */}
      </button>
      {/* 추가 버튼들도 동일한 방식으로 추가 */}
    </div>
  );
};

export default SideBar;
