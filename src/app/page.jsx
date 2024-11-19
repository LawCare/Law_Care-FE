'use client';

import Search from '@/components/SearchBar/Search';
import SideBar from '@/components/SideBar/SideBar';
import React from 'react';

function HomePage() {
  return (
    <div>
      <SideBar />
      <Search />
    </div>
  );
}

export default HomePage;
