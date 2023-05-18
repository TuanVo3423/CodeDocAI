import { useQuery } from 'react-query';
import { getDocument, getDocuments } from './request';

export const useGetDocument = (selectionId: number, options?: any) =>
  useQuery(
    ['getDocument'],
    async () => {
      const data = await getDocument(selectionId);
      return data;
    },
    { ...options }
  );

export const useGetDocuments = (options?: any) =>
  useQuery(
    ['getDocuments'],
    async () => {
      const data = await getDocuments();
      return data;
    },
    { ...options }
  );
