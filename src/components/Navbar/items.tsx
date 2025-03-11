import { MoreHorizontal } from 'lucide-react';

export const navItems = [
  {
    href: '/paraphraser',
    src: '/images/paraphraser.PNG',
    alt: 'Paraphraser',
    label: 'Paraphraser',
    active: true,
  },
  {
    href: '/grammar-checker',
    src: '/images/grammer-check.PNG',
    alt: 'Grammar Checker',
    label: 'Grammar Checker',
  },
  {
    href: '/ai-detector',
    src: '/images/ai-detector.PNG',
    alt: 'AI Detector',
    label: 'AI Detector',
  },
  {
    href: '/plagiarism-checker',
    src: '/images/plagarism-checker.PNG',
    alt: 'Plagiarism Checker',
    label: 'Plagiarism Checker',
  },
  {
    href: '/summarizer',
    src: '/images/summarizer.PNG',
    alt: 'Summarizer',
    label: 'Summarizer',
  },
  {
    href: '/more',
    icon: <MoreHorizontal className="h-7 w-7 text-gray-500" />,
    label: 'More',
    showBorderBottom: true,
  },
  {
    href: '/premium',
    src: '/images/premium.PNG',
    alt: 'QuillBot Premium',
    label: 'QuillBot Premium',
    showBorderBottom: true,
  },
  {
    href: '/chrome',
    src: '/images/chrome.PNG',
    alt: 'QuillBot For Chrome',
    label: 'QuillBot For Chrome',
  },
];
