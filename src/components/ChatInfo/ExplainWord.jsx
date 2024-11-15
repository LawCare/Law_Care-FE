import React, { useState } from 'react';

const ExplainWord = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-sm relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">체팅방 정보</h2>
          <div className="text-sm text-gray-500 mt-1">
            <div>방 번호: 1234</div>
            <div>주제: 임금체불 법안 상담</div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">용어 설명</div>
            <div className="font-semibold">퇴직금</div>
          </div>

          <div className="space-y-4 text-sm text-gray-700">
            <p className="leading-relaxed">
              퇴직금은 회사에서 근무동안 입사 직원이 얻을 그만두게 될 때 받는 돈 입니다. 그동안 열심히 일한 것에 대한
              감사의 의미로 회사가 주는 보너스 같은 돈이에요.
            </p>

            <p className="leading-relaxed">
              退休金通常公司在员工工作多年后离职时给予的一笔钱。这是公司对员工辛勤工作的感谢，有时候需要把时间的关系，工作时间越长，退休金通常越多。
            </p>

            <div className="pt-4 mt-4 text-xs text-gray-400 border-t border-gray-200">
              이 상담은 인공지능이 돕고 있지만 내용이기에 참고하시 위함으로 드립니다.
            </div>

            <div className="text-xs text-gray-400">
              此咨询虽由人工智能协助，但仅不过是参考意见，如有不清楚或建议请寻求专业人士意见再做决定。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatInfo = () => {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setShowExplanation(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        용어 설명 보기
      </button>

      {showExplanation && (
        <ExplainWord onClose={() => setShowExplanation(false)} />
      )}
    </div>
  );
};

export default ChatInfo;