import React from 'react';
import Image from 'next/image';
import add2 from '../../assets/icons/add2.png';
import back from '../../assets/icons/back.png';
const SeverancePay = ({ onBack }) => {
  const handleOutsideClick = (event) => {
    if (event.target.id === 'outside') {
      onBack();
    }
  };

  return (
    <div id="outside" onClick={handleOutsideClick}>
      <div className="flex flex-col px-6 py-5 bg-custom-sky-blue2 rounded-lg">
        <div className="flex items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onBack();
            }}
            className="text-sm text-black font-bold mr-4 flex items-center"
          >
            <Image src={back} alt="뒤로 가기 아이콘" width={6} height={6} />
          </button>
          <h2 className="text-lg font-semibold text-custom-navy2">채팅방 정보</h2>
        </div>
        <p className="text-sm mt-2">방 번호: 1234</p>
        <p className="text-sm">주제: 임금체불 법안 상담</p>
      </div>

      <div className="bg-white p-4">
        <div className="flex items-center mb-4">
          <div className="bg-custom-light-blue text-white px-1 py-1 text-xs font-bold">용어 설명</div>
          <p className="ml-2 text-base font-bold text-black">“퇴직금”</p>
          <Image src={add2} alt="add2 Icon" width={14} height={14} className="ml-auto" />
        </div>

        <p className="text-sm leading-relaxed text-gray-700">
          퇴직금은 회사에서 오랫동안 일한 직원이 일을 그만두게 될 때 받는 돈입니다. 그동안 열심히 일한 것에 대한 감사의
          의미로 회사가 주는 보너스 같은 돈이에요. 퇴직금은 일한 기간이 길수록 더 많이 받을 수 있습니다.
        </p>
        <p className="text-sm leading-relaxed text-gray-700 mt-4">
          退休金是公司在员工工作多年后离职时支付的一笔钱。这是公司对员工辛勤工作的感谢，工作时间越长，退休金通常越多。
        </p>
      </div>
    </div>
  );
};

export default SeverancePay;
