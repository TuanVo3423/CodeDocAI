import { request } from '../axios';
import { ICategory, ICategoryDetails } from './types';

export const getBrief = async (selectionId: number) => {
  const res = await request({
    url: `/selections/${selectionId}/brief`,
    method: 'GET',
  });

  return res;
};

export const getBriefs = async () => {
  const res = await request({
    url: `/chatgpt/briefs`,
    method: 'GET',
  });

  return res;
};

export const getDocuments = async () => {
  const res = await request({
    url: `/selections`,
    method: 'GET',
  });

  return res;
};
