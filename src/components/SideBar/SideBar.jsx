import Image from 'next/image';
import React from 'react';
import home from '../../assets/icons/home.png';
import Chatlist from '../../assets/icons/Chatlist.png';
import Counselorlist from '../../assets/icons/Counselorlist.png';
import Reservationlist from '../../assets/icons/Reservationlist.png';
import video from '../../assets/icons/video.png';

const SideBar = () => {
  return (
    <div className="flex flex-col items-center bg-white h-screen w-20 space-y-4 py-4 ">
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
  );
};

export default SideBar;
