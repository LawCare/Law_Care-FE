import React from 'react';
import Image from 'next/image';
import logo from '../../assets/icons/logo.png';
import search from '../../assets/icons/search.png';
import globals from '../../assets/icons/globals.png';
import hamburger from '../../assets/icons/hamburger.png';

const Search = () => {
  return (
    <div className="bg-custom-light-blue h-16 px-4">
      {/* 데스크톱 뷰 */}
      <div className="hidden lg:flex items-center justify-between h-full">
        {/* 로고 */}
        <div className="flex-shrink-0 ml-4">
          <Image src={logo} alt="LAWCARE Logo" width={140} height={20} />
        </div>

        {/* 검색창 */}
        <div className="flex-grow flex justify-center">
          <div className="flex items-center bg-white rounded-full w-[500px] py-2 shadow-md -translate-x-20">
            <input type="text" className="bg-transparent w-full outline-none text-gray-700 pl-4" />
            <button className="mr-4">
              <Image src={search} alt="Search Icon" width={20} height={20} />
            </button>
          </div>
        </div>

        {/* 글로벌 아이콘 */}
        <div className="flex-shrink-0 flex items-center translate-x-[550px]">
          <button>
            <Image src={globals} alt="globals" width={25} height={25} />
          </button>
        </div>
      </div>

      {/* 모바일 뷰 */}
      <div className="flex lg:hidden items-center justify-between h-full">
        {/* 텍스트 */}
        <div className="text-white text-lg font-bold">채팅</div>

        {/* 메뉴 아이콘 */}
        <button>
          <Image src={hamburger} alt="hamburger Icon" width={18} height={18} />
        </button>
      </div>
    </div>
  );
};

export default Search;
