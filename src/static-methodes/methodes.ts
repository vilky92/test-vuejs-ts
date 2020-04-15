
export function confirmMotDePasse(passwordOne: string, passwordTwo: string) {
    (passwordOne && passwordOne === passwordTwo) ? true : false;
}

export function myId() {
    return sessionStorage.getItem('id');
}
