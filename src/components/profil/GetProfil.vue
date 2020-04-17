<template>
    <div class='formulaire'>
        <h1>Mon profil</h1>
        <form id='contactes'>
          <fieldset>
            <label for="">Votre nom:</label><br>
            <label for="user.lastname">{{user.lastname}}</label>
          </fieldset>

          <fieldset>
            <label for="">Votre prenom:</label><br>
            <label for="user.lastname">{{user.firstname}}</label>
          </fieldset>

          <fieldset>
            <label for="">Votre pseudonyme:</label><br>
            <label for="user.lastname">{{user.username}}</label>
          </fieldset>

          <fieldset>
            <label for="">Votre email:</label><br>
            <label for="user.lastname">{{user.email}}</label>
          </fieldset>
        </form>
    </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import { User } from '../../interface/User';
import * as barel from '../../serviceUser/static-methodes/index';

import axios from '../../../node_modules/axios';

@Component
export default class GetProfil extends Vue {
  user: any = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
  }

  id: string | null = '';

  created(): void {
    this.id = barel.myId();
  }

  mounted(): Promise<User> | void {
    return (this.id && this.id !== null) ? this.getUser(this.id) : console.log(this.id);
  }

  async getUser(id: string | null) {
    this.user = await barel.getUser(id);
    return this.user;
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
