'use client';
import { useState } from 'react';

import { ILayoutProps } from '@/types';
import { cn } from '@/lib/cn';

import LeftNavbar from './Components/LeftNavBar';
import { Header } from './Components/Header';
import { MobileHeader } from './Components/MobileHeader';
import { MobileNavigation } from './Components/MobileNavigation';

interface INavbar extends ILayoutProps {}

export function Navbar({ children, title }: INavbar) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden h-screen md:flex overflow-hidden">
        <LeftNavbar open={open} setOpen={setOpen} />
        <div
          className="flex-col relative flex-1"
          style={{ marginLeft: '70px' }}
        >
          <Header title={title} />
          <div className={cn('mt-16 overflow-auto')} style={{height: 'calc(100vh - 65px)'}} >{children}</div>
        </div>
      </div>

      <div className="block md:hidden relative">
        <MobileHeader />
        <MobileNavigation />
        <div className={cn('mt-[150px] overflow-auto')}>{children}</div>
      </div>
    </>
  );
}
