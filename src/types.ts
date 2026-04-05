export type Page = 'home' | 'part1' | 'part2' | 'part3' | 'part4' | 'part5' | 'part6' | 'about';

export interface Topic {
  id: string;
  title: string;
  shortTitle: string;
  page: Page;
  hasImage?: boolean;
}
