import React from 'react';
import Image from 'next/image';
import add2 from '../../assets/icons/add2.png';
import back from '../../assets/icons/back.png';

const EmploymentContract = ({ onBack }) => {
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
          <p className="ml-2 text-base font-bold text-black">“근로계약서”</p>
          <Image src={add2} alt="add2 Icon" width={14} height={14} className="ml-auto" />
        </div>

        <p className="text-sm leading-relaxed text-gray-700">
          근로계약서는 회사와 내가 서로 약속한 내용을 적어 놓은 문서입니다. 여기에는 내가 어떤 일을 하고, 회사가 나에게
          줄 보상이 적혀 있어요. 예를 들어 월급, 일하는 시간, 쉬는 날 등이 포함됩니다. 일을 시작하기 전에 이 문서를
          작성하고 서명해야 해요. 이 문서는 내 권리를 보호하는 데 매우 중요합니다.
        </p>

        <p className="text-sm leading-relaxed text-gray-700 mt-4">
          劳动合同是公司和我之间的协议文件。这份文件会写明我要做的工作内容，以及公司会给我的报酬，比如工资、工作时间、休息时间等。
          在开始工作之前，必须签署这份合同。这是保护我权益的重要文件。
        </p>
      </div>
    </div>
  );
};

export default EmploymentContract;
