
export function confirmMotDePasse(passwordOne: string, passwordTwo: string): boolean {
  let result = false;
  (passwordOne && passwordOne === passwordTwo) ? result = true : result = false;
  return result;
}

export function myId(): string | null {
  return sessionStorage.getItem('id');
}
