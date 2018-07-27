export interface Note {
  id: string,
  title: string,
  content: string,
  createdAt: Date
}

export interface AuthResult {
  token: string;
}