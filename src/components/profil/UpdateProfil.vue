<template>
  <div class='formulaire'>
    <h1>Modifier mon profil</h1>
    <form id='contactes' action method='submit'>
      <fieldset>
        <input
          placeholder='Nom'
          type='texte'
          required
          v-model='user.lastname'
        />
      </fieldset>

      <fieldset>
        <input
          placeholder='Prénom'
          type='text'
          required
          v-model='user.firstname'
        />
      </fieldset>

      <fieldset>
        <input placeholder='Pseudonyme' type='texte' required v-model='user.username' />
      </fieldset>

      <fieldset>
        <input placeholder='Mot de passe' type='password' required
        v-model='passwordOne' />
      </fieldset>

      <fieldset>
        <input placeholder='Confirmer votre mot de passe' type='password'
        required v-model='passwordTwo' />
      </fieldset>

      <fieldset>
        <input placeholder='Email' type='mail' required v-model='user.email' />
      </fieldset>

      <fieldset>
        <button
          id='newcontactsubmit'
          @click='confirmMotDePasse'
        >
          <span>Modifier mon profil</span>
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { User } from '../../interface/User';
import * as barel from '../../serviceUser/static-methodes/index';

import axios from '../../../node_modules/axios';

@Component
export default class UpdateProfil extends Vue {
  user = {
    lastname: '',
    firstname: '',
    username: '',
    password: '',
    email: '',
  };

  userResult!: User;

  passwordOne = '';

  passwordTwo = '';

  id: string | null = '';

  created(): void {
    this.id = barel.myId();
  }

  confirmMotDePasse(): string | void {
    // const isCorrect = barel.confirmMotDePasse(this.passwordOne, this.passwordOne);
    // return isCorrect ? this.user.password = this.passwordOne :
    // window.alert('Vos mots de passe ne corresponde pas');
    return (this.passwordOne && this.passwordOne === this.passwordTwo)
      ? this.setMotDePasse() : window.alert('Vos mots de passe ne corresponde pas');
  }

  setMotDePasse(): void {
    this.user.password = this.passwordOne;
    this.updateUser();
  }

  async updateUser(): Promise<User> {
    this.userResult = await barel.updateUser(this.id, this.user);
    return this.userResult;
  }
}
</script>

<style scoped>
.formulaire {
  width: 75%;
    margin-left: 12%;
    text-align: center;
    background: #F9F9F9;
}
#newcontactsubmit {
    padding:6px 0 6px 0;
font:bold 13px Arial;
background:#f5f5f5;
color:#555;
border-radius:2px;
width:100px;
border:1px solid #ccc;
box-shadow:1px 1px 3px #999;
}
fieldset{
  border: 1px solid black;
}
@media screen and (max-width: 780px) {
.formulaire {
  width: 80%;
    margin-left: 0%;
    text-align: center;
    background: #F9F9F9;
    margin-top: 0px;
}
#newcontactsubmit {
    padding:6px 0 6px 0;
font:bold 13px Arial;
background:#f5f5f5;
color:#555;
border-radius:2px;
width:80%;;
border:1px solid #ccc;
box-shadow:1px 1px 3px #999;
}
fieldset{
  border: 1px solid black;
}
}
</style>
