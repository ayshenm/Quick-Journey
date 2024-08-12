import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  email: string;
  exp: number;
  iat: number;
}

export const decodeToken = (token: string): DecodedToken => {
  try {
    const decoded: DecodedToken = jwtDecode(token);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};
