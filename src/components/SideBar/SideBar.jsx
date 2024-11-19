import Image from 'next/image';
import React from 'react';
import home from '../../assets/icons/home.svg';
import chat from '../../assets/icons/chat.svg';
import Counselorlist from '../../assets/icons/Counselorlist.svg';
import Reservationlist from '../../assets/icons/Reservationlist.svg';
import video from '../../assets/icons/video.svg';

const SideBar = () => {
  return (
    <>
      <div className="hidden lg:flex flex-col items-center bg-white h-screen w-20 space-y-4 py-4">
        <button className="mt-28">
          <Image src={home} alt="Home" width={40} height={56} />
        </button>
        <button>
          <Image src={chat} alt="Chatlist" width={30} height={48} />
        </button>
        <button>
          <Image src={Counselorlist} alt="Counselorlist" width={57} height={48} />
        </button>
        <button>
          <Image src={Reservationlist} alt="Reservationlist" width={67} height={50} />
        </button>
        <button>
          <Image src={video} alt="video" width={34} height={52} />
        </button>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white flex justify-around py-2 border-t">
        <button>
          <Image src={home} alt="Home" width={34} height={40} />
        </button>
        <button>
          <Image src={chat} alt="chatm" width={29} height={38} className="ml-2 mt-1" />
        </button>
        <button>
          <Image src={Counselorlist} alt="Counselorlist" width={58} height={40} className="ml-1" />
        </button>
        <button>
          <Image src={Reservationlist} alt="Reservationlist" width={67} height={30} />
        </button>
        <button>
          <Image src={video} alt="video" width={34} height={42} />
        </button>
      </div>
    </>
  );
};

export default SideBar;
