import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    id="vertical-features"
    title="We want to hear your story"
    description="Building out Loud features Builders and Founders who are currently in the trenches or have a few wins under their belt. We discuss their journeys, battles fought, and learnings along the way."
  >
    <VerticalFeatureRow
      title="Accountability"
      description="Build a network of other Builders who are facing the same struggles as you."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Mentorship"
      description="Become a part of a community of Founders who have built similar ventures in the past."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Branding"
      description="Get shorts and clips from the podcast that you can use to help others discover you & your work."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
