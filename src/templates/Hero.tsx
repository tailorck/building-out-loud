import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarCenter } from '../navigation/NavbarCenter';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-200">
    <Section id="hero" yPadding="py-6">
      <NavbarCenter logo={<Logo xl />} />
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'A podcast for\n'}
            <span className="text-primary-500">Founders by Founders</span>
          </>
        }
        description="Share your story. Join a community of Builders. Help others get started."
        button={
          <Link href="https://airtable.com/app14vPeawRU1W70t/shraBhkD4MRH5dxet">
            <Button xl>Apply for Interview</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
