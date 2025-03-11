import { ReactNode } from 'react';

export enum Status {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
}

export interface ITask {
  id: string;
  title: string;
  status: Status;
  color: string;
}

export interface ILayoutProps {
  children?: ReactNode;
  title?: string;
}
