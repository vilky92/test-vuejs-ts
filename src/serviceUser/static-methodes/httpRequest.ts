import axios from 'axios';
import { User } from '@/interface/User';
import { API_URL_USER } from '../../utils/constantes';

export async function postUser(user: any) {
  // try {
  //   const content = await axios.post(`${API_URL_USER}post`, user);
  //   const json = await content.data;
  //   console.log('je suis json ', json);
  //   const userResult = JSON.parse(json) as User;
  //   sessionStorage.setItem('id', content.data.id);
  //   return userResult;
  // } catch (ex) {
  //   console.log('erreur', ex);
  //   throw ex;
  // }
  const content = await fetch(`${API_URL_USER}post`,
    {
      method: 'post',
      body: user,
      headers: { 'Content-Type': 'application/json' },
    });
  return await content.json() as User;
}

export async function getUser(id: string | null): Promise<User> {
  try {
    const content = await axios.get(`${API_URL_USER}get/${id}`);
    const json = await content.data;
    return json;
  } catch (ex) {
    console.log('erreur', ex);
    throw ex;
  }
}

export async function updateUser(id: string | null, user: any): Promise<User> {
  try {
    const content = await axios.put(`${API_URL_USER}put/${id}`, user);
    const json = await content.data;
    return json;
  } catch (ex) {
    console.log('erreur', ex);
    throw ex;
  }
}

export async function deleteUser(id: string | null): Promise<User> {
  try {
    const content = await axios.delete(`${API_URL_USER}delete/${id}`);
    const json = await content.data;
    sessionStorage.clear();
    return json;
  } catch (ex) {
    console.log('erreur', ex);
    throw ex;
  }
}
