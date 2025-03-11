'use client';

import type React from 'react';
import Link from 'next/link';
import Image from '@/components/core/image';
import { navItems } from '../items';
import { cn } from '@/lib/cn';

interface LeftNavbarProps {
  open: boolean;
  setOpen: (state: boolean) => void;
}

const LeftNavbar = ({ open, setOpen }: LeftNavbarProps) => {
  return (
    <div
      className={cn(
        'fixed pt-16 bg-background w-[80px] z-30 transition-all duration-300 flex-none border-r-2 border-border ',
        open && 'w-full'
      )}
      style={{
        // height: 'calc(100vh - 1px)',
        minHeight: 'calc(100dvh - 1px)',
        maxHeight: 'calc(100dvh - 1px)',
        overflow: 'auto',
      }}
    >
      <div className="h-full w-full overflow-hidden ">
        <div className="flex flex-col items-center gap-2 flex-1">
          {navItems.map(
            ({ href, src, alt, label, icon, active, showBorderBottom }) => (
              <NavItem
                key={label}
                href={href}
                icon={
                  icon || <Image src={src} alt={alt} width={30} height={30} />
                }
                label={label}
                active={active}
                showBorderBottom={showBorderBottom}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  showBorderBottom?: boolean;
}

function NavItem({
  href,
  icon,
  label,
  active,
  showBorderBottom,
}: NavItemProps) {
  return (
    <Link href={href} className="flex flex-col items-center gap-1 w-full px-2">
      <div className={`p-2 rounded-full ${active ? '' : ''}`}>{icon}</div>
      <span className="text-[10px] text-center text-gray-700">{label}</span>
      {showBorderBottom && <hr className="w-full bg-background" />}
    </Link>
  );
}

export default LeftNavbar;
