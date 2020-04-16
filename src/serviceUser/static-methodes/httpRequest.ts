import axios from 'axios';
import { User } from '@/interface/User';
import { API_URL_USER } from '../../utils/constantes';

class UserObject implements User {
  user = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
  }
}

export function creerUtilisateur(user: User): {} {
  const utilisateurCreer = new UserObject();
  axios.post(`${API_URL_USER}post`, user).then(
    (response) => {
      utilisateurCreer.user = response.data;
      console.log('sucess', response);
      // this.$router.push("connexion")
    },
  ).catch((response) => {
    console.log('erreur', response);
  });
  return utilisateurCreer.user;
}

export function getUser(id: string | null) {
  const userObject = new UserObject();
  axios.get(`${API_URL_USER}get/${id}`).then(
    (response) => {
      userObject.user = response.data;
      console.log('sucess', response);
    },
  ).catch((response) => {
    console.log('erreur', response);
  });
  console.log('user http ', userObject.user);
  return userObject.user;
}
