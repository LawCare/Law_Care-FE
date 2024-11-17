import React from 'react';
import Image from 'next/image';
import add2 from '../../assets/icons/add2.png';
import back from '../../assets/icons/back.png';

const BasicSalary = ({ onBack }) => {
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
          <p className="ml-2 text-base font-bold text-black">“기본급”</p>
          <Image src={add2} alt="add2 Icon" width={14} height={14} className="ml-auto" />
        </div>

        <p className="text-sm leading-relaxed text-gray-700">
          기본급은 회사가 일을 한 대가로 직원에게 매달 정해진 금액을 지급하는 가장 기본적인 급여입니다. 추가 수당이나
          보너스를 제외한 순수한 월급입니다. 기본급은 근로계약서에 명시되어 있으며, 내가 받는 다른 급여나 수당의 기준이
          됩니다.
        </p>

        <p className="text-sm leading-relaxed text-gray-700 mt-4">
          基本工资是公司每月支付给员工的最基本报酬，是员工工作的基本收入。 它不包括额外津贴或奖金，是纯工资。
          基本工资会在劳动合同中明确写明， 也是计算其他津贴或加班费的基准。
        </p>
      </div>
    </div>
  );
};

export default BasicSalary;
