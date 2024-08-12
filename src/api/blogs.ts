import { IBlog } from '@/types';
import { apiGet } from '@/utils';

export const getBlogs = async (): Promise<IBlog> => {
  return apiGet<IBlog>('/blogs', false);
};
