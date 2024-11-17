import React from 'react';
import Image from 'next/image';
import add2 from '../../assets/icons/add2.png';
import back from '../../assets/icons/back.png';

const Specification = ({ onBack }) => {
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
          <p className="ml-2 text-base font-bold text-black">“명세서”</p>
          <Image src={add2} alt="add2 Icon" width={14} height={14} className="ml-auto" />
        </div>

        <p className="text-sm leading-relaxed text-gray-700">
          명세서는 회사가 나에게 지급한 월급이나 보너스, 세금 등을 자세히 적은 문서입니다. 이 문서를 통해 내가 받은 돈과
          공제된 돈의 내역을 확인할 수 있어요. 명세서는 내가 회사로부터 어떤 돈을 받았는지 증명하는 중요한 자료입니다.
        </p>

        <p className="text-sm leading-relaxed text-gray-700 mt-4">
          工资明细是公司发给我的文件，详细记录了我的工资、奖金、税金等内容。通过这份文件，我可以清楚地了解自己收到的钱和扣除的钱。
          工资明细是证明我从公司收到报酬的重要资料。
        </p>
      </div>
    </div>
  );
};

export default Specification;
