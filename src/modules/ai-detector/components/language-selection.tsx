import { ArrowLeftRight } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/core/select';

export function LanguageSelection() {
  return (
    <div className="flex items-center gap-4 mb-6 rounded-lg h-12 border border-gray-300 ">
      <Select defaultValue="detect">
        <SelectTrigger className="w-[50%]  border-none">
          <SelectValue placeholder="Detect" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="detect">Detect</SelectItem>
          <SelectItem value="analyze">Analyze</SelectItem>
        </SelectContent>
      </Select>

      <ArrowLeftRight className="h-4 w-4 text-gray-400" />

      <Select defaultValue="english">
        <SelectTrigger className="w-[50%]  border-none">
          <SelectValue placeholder="English" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="spanish">Spanish</SelectItem>
          <SelectItem value="french">French</SelectItem>
          <SelectItem value="german">German</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
