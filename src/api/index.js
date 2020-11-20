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

export const getPolls = async () => {
  const response = await fetch(`${environment.apiBase}/list_polls`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data);
  }
  return data;
};

export const getUsers = async () => {
  const response = await fetch(`${environment.apiBase}/list_users`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data);
  }
  return data;
};

export const addUser = async (body) => {
  const response = await fetch(
    `${environment.apiBase}/add_user?username=${body.username}&password=${body.password}&role=${body.role}`
  );
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data);
  }
  return data;
};

export const deleteOption = async (body) => {
  const response = await fetch(
    `${environment.apiBase}/delete_poll_option?id=${body.id}&option_text=${body.option}`
  );
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data);
  }
  return data;
};
