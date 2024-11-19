'use client';

import Image from 'next/image';
import SearchBarPage from '@/app/(chat)/search-bar/page';
import SideBarPage from '@/app/(chat)/side-bar/page';
import manicon from '../assets/icons/man icon.png';
import womanicon from '../assets/icons/woman icon.png';
import inprogress from '../assets/icons/in progress.png';
import end from '../assets/icons/end.png';
import vidio1 from '../assets/icons/01.png';
import vidio2 from '../assets/icons/02.png';
import vidio3 from '../assets/icons/03.png';
import img from '../assets/icons/img.png';

const Chatpage = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* 사이드바 */}
      <aside className="lg:w-20 lg:h-full lg:fixed lg:left-0 lg:top-0 lg:block hidden">
        <SideBarPage />
      </aside>

      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white flex justify-around py-2 border-t">
        <SideBarPage />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="flex flex-col flex-grow lg:ml-20">
        {/* 서치바 */}
        <header className="w-full">
          <SearchBarPage />
        </header>

        {/* 메인 콘텐츠 */}
        <main className=" px-56 flex flex-col space-y-6">
          {/* 전문가 리스트 */}
          <section className="bg-white pt-4 px-4 rounded-lg">
            <div className="text-xl font-bold mb-4 flex justify-between items-center">
              <h2 className="text-xl font-bold ">상담 전문가</h2>
              <button className="text-sm border px-4 py-1 rounded-md">더보기</button>
            </div>
            <div className="grid grid-cols-7">
              {/* 전문가 카드 1 */}
              <div className="relative bg-gray-200 w-[186px] h-[228px] rounded-md overflow-hidden">
                <Image src={img} alt="Expert 1" layout="fill" objectFit="cover" className="rounded-md" />
                {/* 버튼 영역 */}
                <div className="absolute bottom-0 w-full flex justify-center items-center space-x-2 py-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm">채팅하기</button>
                  <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">예약하기</button>
                </div>
              </div>

              {/* 전문가 카드 2 */}
              <div className="relative bg-gray-200 w-[186px] h-[228px] rounded-md overflow-hidden">
                <Image src="/expert2.png" alt="Expert 2" layout="fill" objectFit="cover" className="rounded-md" />
                <div className="absolute bottom-0 w-full bg-white/80 flex justify-center items-center space-x-2 py-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">채팅하기</button>
                  <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">예약하기</button>
                </div>
              </div>

              {/* 전문가 카드 3 */}
              <div className="relative bg-gray-200 w-[186px] h-[228px] rounded-md overflow-hidden">
                <Image src="/expert3.png" alt="Expert 3" layout="fill" objectFit="cover" className="rounded-md" />
                <div className="absolute bottom-0 w-full bg-white/80 flex justify-center items-center space-x-2 py-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">채팅하기</button>
                  <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">예약하기</button>
                </div>
              </div>

              {/* 전문가 카드 4 */}
              <div className="relative bg-gray-200 w-[186px] h-[228px] rounded-md overflow-hidden">
                <Image src="/expert4.png" alt="Expert 4" layout="fill" objectFit="cover" className="rounded-md" />
                <div className="absolute bottom-0 w-full bg-white/80 flex justify-center items-center space-x-2 py-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">채팅하기</button>
                  <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">예약하기</button>
                </div>
              </div>

              {/* 전문가 카드 5 */}
              <div className="relative bg-gray-200 w-[186px] h-[228px] rounded-md overflow-hidden">
                <Image src="/expert5.png" alt="Expert 5" layout="fill" objectFit="cover" className="rounded-md" />
                <div className="absolute bottom-0 w-full bg-white/80 flex justify-center items-center space-x-2 py-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">채팅하기</button>
                  <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">예약하기</button>
                </div>
              </div>

              {/* 전문가 카드 6 */}
              <div className="relative bg-gray-200 w-[186px] h-[228px] rounded-md overflow-hidden">
                <Image src="/expert6.png" alt="Expert 6" layout="fill" objectFit="cover" className="rounded-md" />
                <div className="absolute bottom-0 w-full bg-white/80 flex justify-center items-center space-x-2 py-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">채팅하기</button>
                  <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">예약하기</button>
                </div>
              </div>
              <div className="relative bg-gray-200 w-[186px] h-[228px] rounded-md overflow-hidden">
                <Image src="/expert6.png" alt="Expert 6" layout="fill" objectFit="cover" className="rounded-md" />
                <div className="absolute bottom-0 w-full bg-white/80 flex justify-center items-center space-x-2 py-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">채팅하기</button>
                  <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">예약하기</button>
                </div>
              </div>
            </div>
          </section>

          {/* 진행 중인 채팅과 예약 */}
          <div className="flex space-x-4">
            {/* 내가 진행 중인 채팅 */}
            <section className="bg-white p-4 rounded-lg  flex-1">
              <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
                진행 중인 채팅 목록
                <button className="text-sm border px-4 py-1 rounded-md">더보기</button>
              </h2>
              <div className="space-y-4">
                {/* 첫 번째 채팅 */}
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12">
                      <Image src={manicon} alt="Consultant 1" width={70} height={70} className="rounded-full" />
                      <div className="absolute bottom-1 right-0">
                        <Image src={inprogress} alt="inprogress" width={15} height={15} />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">김은채</p>
                      <p className="text-sm text-gray-500">이웃살이 쉼터 담당자</p>
                    </div>
                  </div>
                  <span className="text-[12px] font-semibold px-2 py-1 bg-custom-sky-blue3 text-custom-light-blue rounded-full">
                    진행 중
                  </span>
                </div>

                {/* 두 번째 채팅 */}
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12">
                      <Image src={womanicon} alt="Consultant 2" width={70} height={70} className="rounded-full" />
                      <div className="absolute bottom-1 right-0">
                        <Image src={end} alt="end" width={15} height={15} />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">창다은</p>
                      <p className="text-sm text-gray-500">외국인 노동자 센터 담당자</p>
                    </div>
                  </div>
                  <span className="text-[12px] font-semibold px-2 py-1 bg-custom-gray text-custom-dark-gray rounded-full">
                    보류 중
                  </span>
                </div>
              </div>
            </section>

            {/* 내가 진행 중인 예약 */}
            <section className="bg-white p-4 rounded-lg flex-1">
              <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
                진행 중인 예약 목록
                <button className="text-sm border px-4 py-1 rounded-md">더보기</button>
              </h2>
              <div className="space-y-4">
                {/* 첫 번째 채팅 */}
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12">
                      <Image src={manicon} alt="Consultant 1" width={70} height={70} className="rounded-full" />
                    </div>
                    <div>
                      <p className="font-semibold">김은채</p>
                      <p className="text-sm text-gray-500">2024.11.21 오후 6시</p>
                    </div>
                  </div>
                  <span className="text-[12px] font-semibold px-2 py-1 bg-custom-sky-blue3 text-custom-light-blue rounded-full">
                    오늘
                  </span>
                </div>

                {/* 두 번째 채팅 */}
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12">
                      <Image src={womanicon} alt="Consultant 2" width={70} height={70} className="rounded-full" />
                    </div>
                    <div>
                      <p className="font-semibold">창다은</p>
                      <p className="text-sm text-gray-500">2024.11.24 오후 2시</p>
                    </div>
                  </div>
                  <span className="text-[12px] font-semibold px-2 py-1 bg-custom-gray text-custom-dark-gray rounded-full">
                    3일 후
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* 교육 영상 */}
          <section className="bg-white pb-4 px-2 rounded-lg">
            <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
              교육 영상
              <button className="text-sm border px-4 py-1 rounded-md">더보기</button>
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {/* 첫 번째 비디오 카드 */}
              <div className="relative h-48 rounded-md">
                <Image src={vidio1} alt="Video 1" layout="fill" objectFit="cover" className="rounded-md" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-800 bg-opacity-50 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 5v14l11-7-11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 두 번째 비디오 카드 */}
              <div className="relative bg-gray-200 h-48 rounded-md">
                <Image src={vidio3} alt="Video 2" layout="fill" objectFit="cover" className="rounded-md" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-800 bg-opacity-50 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 5v14l11-7-11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 세 번째 비디오 카드 */}
              <div className="relative bg-gray-200 h-48 rounded-md">
                <Image src={vidio2} alt="Video 3" layout="fill" objectFit="cover" className="rounded-md" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-800 bg-opacity-50 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 5v14l11-7-11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Chatpage;
