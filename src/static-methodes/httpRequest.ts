import axios from 'axios';
import { User } from '@/interface/User';

export function creerUtilisateur(user: User) {
    var utilisateurCreer = {}
    axios.post('http://localhost:8181/user/post', user).then(
      (response) => {
        utilisateurCreer = response.data;
        console.log('sucess', response);
        // this.$router.push("connexion")
      },
    ).catch((response) => {
      console.log('erreur', response);
    });
    return utilisateurCreer;
}

export function getUser(id: string | null) {
    var user = {};
    axios.get(`http://localhost:8181/user/get/${id}`).then(
      (response) => {
        user = response.data;
        console.log('sucess', response);
      },
    ).catch((response) => {
      console.log('erreur', response);
    });
    return user;
  }