export type AuthSession = {
  token: string;
  user: {
    id: string;
    email: string;
    role: 'tenant' | 'landlord';
  };
};