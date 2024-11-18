import React from 'react';
import ChatInfo from '@/components/ChatInfo/ChatInfo';
import SeverancePay from '@/components/ChatInfo/severancePay';
import BasicSalary from '@/components/ChatInfo/basicSalary';
import EmploymentContract from '@/components/ChatInfo/employmentxContract';
import Specification from '@/components/ChatInfo/specification';

const ChatInfoPage = ({ currentComponent, onBack }) => {
  if (currentComponent === 'SeverancePay') {
    return <SeverancePay onBack={onBack} />;
  }
  if (currentComponent === 'BasicSalary') {
    return <BasicSalary onBack={onBack} />;
  }
  if (currentComponent === 'EmploymentContract') {
    return <EmploymentContract onBack={onBack} />;
  }
  if (currentComponent === 'Specification') {
    return <Specification onBack={onBack} />;
  }

  return <ChatInfo />;
};

export default ChatInfoPage;
