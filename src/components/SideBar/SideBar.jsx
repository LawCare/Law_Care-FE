import Image from 'next/image';
import React from 'react';
import home from '../../assets/icons/home.png';
import Chatlist from '../../assets/icons/Chat list.png';
import Counselorlist from '../../assets/icons/Counselor list.png';
import Reservationlist from '../../assets/icons/Reservation list.png';
import Provisionoflegalinformation from '../../assets/icons/Provision of legal information.png';
import video from '../../assets/icons/video.png';

const SideBar = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-custom-light-blue to-custom-dark-blue h-screen w-20 space-y-4 py-4 ">
      <button className="p-2 mt-28">
        <Image src={home} alt="Home" width={50} height={50} />
      </button>
      <button className="p-2">
        <Image src={Chatlist} alt="Chatlist" width={50} height={50} />
      </button>
      <button className="p-2">
        <Image src={Counselorlist} alt="Counselorlist" width={50} height={50} />
      </button>
      <button className="p-2">
        <Image src={Reservationlist} alt="Reservationlist" width={50} height={50} />
      </button>
      <button className="p-2">
        <Image src={Provisionoflegalinformation} alt="Provisionoflegalinformation" width={50} height={50} />
      </button>
      <button className="p-2">
        <Image src={video} alt="video" width={50} height={50} />
      </button>
    </div>
  );
};

export default SideBar;
