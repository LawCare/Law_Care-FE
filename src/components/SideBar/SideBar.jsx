import Image from 'next/image';
import React from 'react';
import home from '../../assets/icons/home.png';
import Chatlist from '../../assets/icons/Chatlist.png';
import Counselorlist from '../../assets/icons/Counselorlist.png';
import Reservationlist from '../../assets/icons/Reservationlist.png';
import video from '../../assets/icons/video.png';
import chatm from '../../assets/icons/chatm.png';

const SideBar = () => {
  return (
    <>
      <div className="hidden lg:flex flex-col items-center bg-white h-screen w-20 space-y-4 py-4">
        <button className="mt-28">
          <Image src={home} alt="Home" width={100} height={100} />
        </button>
        <button>
          <Image src={Chatlist} alt="Chatlist" width={100} height={100} />
        </button>
        <button>
          <Image src={Counselorlist} alt="Counselorlist" width={100} height={100} />
        </button>
        <button>
          <Image src={Reservationlist} alt="Reservationlist" width={100} height={100} />
        </button>
        <button>
          <Image src={video} alt="video" width={100} height={100} />
        </button>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white flex justify-around py-2 border-t">
        <button>
          <Image src={home} alt="Home" width={70} height={70} />
        </button>
        <button>
          <Image src={chatm} alt="chatm" width={70} height={70} />
        </button>
        <button>
          <Image src={Counselorlist} alt="Counselorlist" width={70} height={70} />
        </button>
        <button>
          <Image src={Reservationlist} alt="Reservationlist" width={70} height={70} />
        </button>
        <button>
          <Image src={video} alt="video" width={70} height={70} />
        </button>
      </div>
    </>
  );
};

export default SideBar;
