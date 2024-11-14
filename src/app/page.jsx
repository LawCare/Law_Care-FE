import AllChatPage from './(chat)/all-chat/page';
import ChatInfoPage from './(chat)/chat-info/page';
import ChattingPage from './(chat)/live-chat/page';
import SearchBarPage from './(chat)/search-bar/page';
import SideBarPage from './(chat)/side-bar/page';

const Chatpage = () => {
  return (
    <div>
      <SearchBarPage />
      <SideBarPage />
      <AllChatPage />
      <ChattingPage />
      <ChatInfoPage />
    </div>
  );
};

export default Chatpage;
