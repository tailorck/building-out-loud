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

    <Section yPadding="pt-10 pb-20">
      <HeroOneButton
        title={
          <>
            {'A Podcast for\n'}
            <span className="text-primary-500">Builders</span>
          </>
        }
        description={[
          'Share your Founder story',
          'Join a community of Builders',
          'Help others get started.',
        ]}
        button={
          <Link href="https://airtable.com/app14vPeawRU1W70t/shraBhkD4MRH5dxet">
            <Button xl>Apply Now 🎙️</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
