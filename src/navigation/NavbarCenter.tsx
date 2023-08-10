import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
};

const NavbarCenter = (props: INavbarProps) => (
  <div className="flex flex-row items-center justify-center">
    <div>
      <Link href="/">{props.logo}</Link>
    </div>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarCenter };
