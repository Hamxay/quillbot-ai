import { FeatureCard } from './feature-card';

import Image from '@/components/core/image';

export function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <FeatureCard
        icon={
          <Image
            src={'/images/instant.PNG'}
            alt="Instant"
            width={60}
            height={60}
          />
        }
        title="Instant"
        description="Get accurate translations in just a few seconds"
        borderColor='#158732'
      />
      <FeatureCard
        icon={
          <Image
            src={'/images/versatile.PNG'}
            alt="Instant"
            width={60}
            height={60}
          />
        }
        title="Versatile"
        description="Translate words, sentences, paragraphs, and more"
        borderColor='#F1BA2E'
      />
      <FeatureCard
        icon={
          <Image
            src={'/images/multi-lingual.PNG'}
            alt="Instant"
            width={60}
            height={60}
          />
        }
        title="Multilingual"
        description="Try it in 50 different languages and dialects"
        borderColor='#DC350B'
      />
      <FeatureCard
        icon={
          <Image
            src={'/images/affordable.PNG'}
            alt="Instant"
            width={60}
            height={60}
          />
        }
        title="Affordable"
        description="Translate for free—or get more features with Premium"
        borderColor='#6F19FA'
      />
    </div>
  );
}
