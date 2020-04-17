<template>
  <div class='formulaire'>
    <h1>Inscription</h1>
    <form id='contactes'>
      <fieldset>
        <input
          placeholder='Nom'
          type='texte'
          required
          v-model='lastname'
        />
      </fieldset>

      <fieldset>
        <input
          placeholder='Prénom'
          type='text'
          required
          v-model='firstname'
        />
      </fieldset>

      <fieldset>
        <input placeholder='Pseudonyme' type='texte' required v-model='username' />
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
        <input placeholder='Email' type='mail' required v-model='email' />
      </fieldset>

      <fieldset>
        <button
          id='newcontactsubmit'
          :disabled="checkPassword"
          @click='createUser'
        >
          <span>S'inscrire</span>
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

//  import { InscriptionMethods } from '../../barrel_file/InscriptionBarrel';

@Component
export default class Inscription extends Vue {
  lastname = '';

  firstname = '';

  username= '';

  email = '';

  passwordOne = '';

  passwordTwo = '';

  //    inscriptionMethods = new InscriptionMethods();

  get checkPassword() {
    return ((this.passwordOne && this.passwordOne !== this.passwordTwo));
  }

  async createUser() {
    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      username: this.username,
      password: this.passwordOne,
    };
    await barel.postUser(user);
  }
}
</script>
<style scoped>
.formulaire {
    margin-top: 100px;
    width: 20%;
    margin-left: 40%;
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
</style>
