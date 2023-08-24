import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="The best stories come from the trenches."
      subtitle="Share your story."
      button={
        <Link href="https://airtable.com/app14vPeawRU1W70t/shraBhkD4MRH5dxet">
          <Button>Apply Now 🎙️</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
