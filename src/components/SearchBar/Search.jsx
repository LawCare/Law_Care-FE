import React from 'react';
import Image from 'next/image';
import logo from '../../assets/icons/logo.png';
import search from '../../assets/icons/search.png';

const Search = () => {
  return (
    <div className="flex items-center justify-start bg-blue-100 h-16">
      {/* 로고 */}
      <div className="flex-shrink-0 ml-4">
        <Image src={logo} alt="LAWCARE Logo" width={140} height={20} />
      </div>

      {/* 검색창 */}
      <div className="flex-grow flex justify-center ">
        <div className="flex items-center bg-custom-blue rounded-full w-[500px] py-2 shadow-md -translate-x-20">
          <input type="text" className="bg-transparent w-full outline-none text-gray- pl-4" />
          <button className="mr-4">
            <Image src={search} alt="Search Icon" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
