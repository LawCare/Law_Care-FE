'use client';
import Image from 'next/image';
import SearchBarPage from '@/app/(chat)/search-bar/page';
import SideBarPage from '@/app/(chat)/side-bar/page';

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
        <main className="py-4 px-40 flex flex-col space-y-6">
          {/* 전문가 리스트 */}
          <section className="bg-white pt-4 px-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">00전문가</h2>
            <div className="grid grid-cols-7">
              {/* 전문가 카드 1 */}
              <div className="relative bg-gray-200 w-[186px] h-[228px] rounded-md overflow-hidden">
                <Image src="/expert1.png" alt="Expert 1" layout="fill" objectFit="cover" className="rounded-md" />
                <div className="absolute bottom-0 w-full bg-white/80 flex justify-center items-center space-x-2 py-2">
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
                내가 진행 중인 채팅
                <button className="text-sm border px-4 py-1 rounded-md">더보기</button>
              </h2>
              <div className="space-y-4">
                {/* 첫 번째 채팅 */}
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/user-avatar1.png"
                        alt="User 1"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">김윤채</p>
                      <p className="text-sm text-gray-500">OOO 전문가</p>
                    </div>
                  </div>
                  <button className="text-blue-500 font-semibold">채팅중</button>
                </div>

                {/* 두 번째 채팅 */}
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/user-avatar2.png"
                        alt="User 2"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">이윤지</p>
                      <p className="text-sm text-gray-500">OOO 전문가</p>
                    </div>
                  </div>
                  <button className="text-gray-500 font-medium">종료됨</button>
                </div>
              </div>
            </section>

            {/* 내가 진행 중인 예약 */}
            <section className="bg-white p-4 rounded-lg flex-1">
              <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
                내가 진행 중인 예약
                <button className="text-sm border px-4 py-1 rounded-md">더보기</button>
              </h2>
              <div className="space-y-4">
                {/* 첫 번째 예약 */}
                <div className="relative bg-gray-200 h-20 rounded-md">
                  <Image
                    src="/reservation-image1.png"
                    alt="Reservation 1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>

                {/* 두 번째 예약 */}
                <div className="relative bg-gray-200 h-20 rounded-md">
                  <Image
                    src="/reservation-image2.png"
                    alt="Reservation 2"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* 교육 영상 */}
          <section className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
              교육 영상
              <button className="text-sm border px-4 py-1 rounded-md">더보기</button>
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative bg-gray-200 h-40 rounded-md">
                <Image
                  src="/video-thumbnail1.png"
                  alt="Video 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="relative bg-gray-200 h-40 rounded-md">
                <Image
                  src="/video-thumbnail2.png"
                  alt="Video 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="relative bg-gray-200 h-40 rounded-md">
                <Image
                  src="/video-thumbnail3.png"
                  alt="Video 3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Chatpage;
