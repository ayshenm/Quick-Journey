import { ReactNode } from 'react';

export interface IBlog {
  content?: ReactNode;
  id: number;
  title: string;
  text: string;
  image: string;
}
