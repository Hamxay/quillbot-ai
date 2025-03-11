import Link from 'next/link';

import Image from '@/components/core/image';

import { navItems } from '../items';

export function MobileNavigation() {
  return (
    <div className="fixed top-[65px] left-0 right-0 flex overflow-x-auto gap-x-4 scrollbar-hide border-b border-gray-200 bg-background">
      {navItems.map(
        ({ href, src, alt, label, icon, active, showBorderBottom }) => (
          <MobileNavItem
            key={label}
            href={href}
            icon={icon || <Image src={src} alt={alt} width={30} height={30} />}
            label={label}
            active={active}
            showBorderBottom={showBorderBottom}
          />
        )
      )}
    </div>
  );
}

interface MobileNavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  showBorderBottom?: boolean;
}

function MobileNavItem({
  href,
  icon,
  label,
  active,
  showBorderBottom,
}: MobileNavItemProps) {
  return (
    <Link href={href} className="flex flex-col items-center gap-1 w-full px-2">
      <div className={`p-2 rounded-full ${active ? '' : ''}`}>{icon}</div>
      <span className="text-[10px] text-center text-gray-700">{label}</span>
      {showBorderBottom && <hr className="w-full bg-background" />}
    </Link>
  );
}
