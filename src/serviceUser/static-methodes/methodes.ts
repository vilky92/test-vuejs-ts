import { User } from '@/interface/User';

export function confirmMotDePasse(passwordOne: string, passwordTwo: string): boolean {
  let result = false;
  if (passwordOne && passwordOne === passwordTwo) {
    result = true;
    return result;
  }
  return result;
  // (passwordOne && passwordOne === passwordTwo) ? result = true : result = false;
  // return result;
}

export function myId(): string | null {
  return sessionStorage.getItem('id');
}

// class UserObject implements User {
//   user = {
//     firstname: '',
//     lastname: '',
//     username: '',
//     password: '',
//     email: '',
//   }
// }
