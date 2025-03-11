'use client';

import AppLayout from '@/layouts/AppLayout';

import HeroSection from './components/hero-section';
import { FeaturesSection } from './components/feature-section';
import { CallToAction } from './components/call-action';
import { DescriptionSection } from './components/description-section';

export function Home() {
  return (
    <AppLayout title="Translator">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <HeroSection />
        <FeaturesSection />
        <CallToAction />
        <DescriptionSection />
      </div>
    </AppLayout>
  );
}
