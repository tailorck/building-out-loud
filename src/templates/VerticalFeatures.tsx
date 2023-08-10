import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    id="vertical-features"
    title="We want to hear your story"
    description="Building out Loud features Builders and Founders who are currently in the trenches or have won a few battles."
  >
    <VerticalFeatureRow
      title="Accountability"
      description="Build a network of other Builders who are facing the same struggles as you."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Mentorship"
      description="Gain access to a community of Founders who have built similar ventures in the past."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Branding"
      description="We will provide you with shorts and clips from the podcast that you can use in your own branding."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
