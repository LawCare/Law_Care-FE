import './globals.css';
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
  subsets: ['latin', 'korean', 'vietnamese', 'chinese-simplified', 'thai']
});

export const metadata = {
  title: 'LawCare',
  description: '외국인 노동자들을 위한 법률 채팅/상담 서비스'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={notoSans.className}>
      <body>{children}</body>
    </html>
  );
}
