import { useQuery } from 'react-query';
import { getBrief, getBriefs } from './request';

export const useBrief = (selectionId: number, options?: any) =>
  useQuery(
    ['getBrief'],
    async () => {
      return await getBrief(selectionId);
    },
    { ...options }
  );

export const useBriefs = (options?: any) =>
  useQuery(
    ['getBriefs'],
    async () => {
      return await getBriefs();
    },
    { ...options }
  );
