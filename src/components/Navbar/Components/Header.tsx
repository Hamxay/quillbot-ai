'use client';

import { LogOutIcon, ChevronDownIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/core/dropdown-menu';
import { Button } from '@/components/core/button';

import Image from '@/components/core/image';

import { ILayoutProps } from '@/types';

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

export function Header({ title = 'Translator' }: ILayoutProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 w-full flex justify-between items-center p-2 border-b border-[#D8DCE2] bg-background ">
      <Image
        src="/images/logo.png"
        alt="QuillBot Logo"
        width={150}
        height={50}
        style={{ marginLeft: -10 }}
      />
      <div className="text-lg font-bold">{title}</div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="bg-white">
            <Button className="text-primary border-primary ">
              <Image
                src="/images/extenions.PNG"
                alt="extension"
                width={20}
                height={20}
              />
              Apps and Extensions
              <ChevronDownIcon className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <LogOutIcon className="w-4 h-4 mr-2" /> Logout{' '}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className=" text-white rounded-full h-9">
          <Image
            src="/images/premiun-green.PNG"
            alt="premiun-green"
            width={20}
            height={20}
          />
          Upgrade to Premium
        </Button>
        <Avatar className={`items-center justify-center flex   object-contain`}>
          <AvatarImage
            alt="Uploaded file preview"
            style={{
              objectFit: 'fill',
            }}
          />
          <AvatarFallback className="bg-[#0087D0] rounded-full px-2.5 py-1 text-white">
            U
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
