import { environment } from '../../environment';

export const login = async (username, password) => {
  const response = await fetch(
    `${environment.apiBase}/login?username=${username}&password=${password}`
  );
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data);
  }
  return data;
};
