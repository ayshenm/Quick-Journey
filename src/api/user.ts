import { apiGet } from '@/utils';

interface UserProfile {
  id: string;
  username: string;
  email: string;
}

export const getUserProfile = async (): Promise<UserProfile> => {
  return apiGet<UserProfile>('/user/profile');
};
