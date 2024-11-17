import React from 'react';

const ExplainWord = ({ onBack }) => {
  return (
    <div className="bg-gray-100 w-100 p-4 min-h-screen rounded-lg shadow-md">
      <button onClick={onBack} className="text-blue-500 underline mb-4">
        뒤로 가기
      </button>

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-custom-navy2">용어 설명</h2>
        <p className="text-sm font-semibold mt-2 text-blue-500">퇴직금</p>
      </div>

      <hr className="border-t-2 border-custom-navy my-2" />

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <p className="text-sm leading-relaxed text-gray-700">
          퇴직금은 회사에서 근무 동안 입사 직원이 얻을 그만두게 될 때 받는 돈입니다. 그동안 열심히 일한 것에 대한 감사의
          의미로 회사가 주는 보너스 같은 돈이에요.
        </p>
        <p className="text-sm leading-relaxed text-gray-700 mt-4">
          退休金通常公司在员工工作多年后离职时给予的一笔钱。这是公司对员工辛勤工作的感谢，有时候需要把时间的关系，工作时间越长，退休金通常越多。
        </p>
      </div>

      <div className="text-xs text-gray-400 mt-4">
        <p className="mb-2">
          이 상담은 인공지능이 돕고 있지만 참고하시 위함으로 드리는 내용입니다. 명확한 결정을 위해 전문가의 의견을
          구하세요.
        </p>
        <p>此咨询虽由人工智能协助，但仅不过是参考意见，如有不清楚或建议请寻求专业人士意见再做决定。</p>
      </div>
    </div>
  );
};

export default ExplainWord;
