export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  id:string,
  username: string;
  role: string;
  success: boolean;
}
