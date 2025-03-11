'use client';
import { Menu } from 'lucide-react';

import Image from '@/components/core/image';

import { Button } from '@/components/core/button';

export function MobileHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 flex justify-between items-center p-3 border-b border-gray-200 bg-background">
      <div className="flex items-center">
        <Image src="/images/logo.PNG" alt="QuillBot Logo" width={140} height={30} />
      </div>
      <div className="flex items-center gap-2">
        <Button className=" text-white rounded-full h-9 gap-2">
          <Image
            src="/images/premiun-green.PNG"
            alt="premiun-green"
            width={20}
            height={20}
          />
          Premium
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
