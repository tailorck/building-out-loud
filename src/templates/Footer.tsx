import Link from 'next/link';

import LinkedIn from '@/icons/LinkedIn';
import Twitter from '@/icons/Twitter';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo />}
        iconList={
          <>
            {/*
            <Link href="/">
              <RSS />
            </Link>

            <Link href="/">
              <Github />
            </Link>

            <Link href="/">
              <Facebook />
            </Link>
            */}

            <Link href="/">
              <Twitter />
            </Link>

            <Link href="/">
              <LinkedIn />
            </Link>
          </>
        }
      >
        <li>
          <Link href="#hero">Home</Link>
        </li>
        <li>
          <Link href="#vertical-features">About</Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
