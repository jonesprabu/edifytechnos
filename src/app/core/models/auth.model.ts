export interface LoggedInUser {
  name: string;
  email: string;
  password: string;
  authToken: string | null;
}
