import { Clipboard } from 'lucide-react';

import { Button } from '@/components/core/button';

import AppLayout from '@/layouts/AppLayout';

import { LanguageSelection } from './components/language-selection';

export function AIDetector() {
  return (
    <AppLayout title="Ai Detector">
      <div className="p-4 max-w-3xl mx-auto">
        <LanguageSelection />

        <div className="min-h-[100px] mb-4">
          <textarea
            className="-ml-3 w-full h-full min-h-[100px] resize-none focus:outline-none text-gray-700  p-4 rounded-md text-3xl placeholder:text-gray-300 placeholder:font-medium placeholder:text-2xl"
            placeholder="Enter Text..."
          />
        </div>

        <Button
          variant="outline"
          className="flex items-center gap-2 text-primary border-primary hover:bg-green-50 rounded-2xl h-10"
        >
          <Clipboard className="h-4 w-4" />
          <span>Paste text</span>
        </Button>
      </div>
    </AppLayout>
  );
}
