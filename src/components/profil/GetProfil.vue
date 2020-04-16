<template>
    <div class='formulaire'>
        <h1>Mon profil</h1>
        <form id='contactes' action method='submit'>
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
import { Component, Vue } from 'vue-property-decorator';
import { User } from '../../interface/User';
import * as barel from '../../serviceUser/static-methodes/index';

import axios from '../../../node_modules/axios';

@Component
export default class GetProfil extends Vue implements User {
  user = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
  }

  id: string | null = '';

  created(): void {
    // this.id = sessionStorage.getItem('id');
    this.id = barel.myId();
  }

  mounted(): string | void {
    return (this.id && this.id !== null) ? this.getUser(this.id) : console.log(this.id);
  }

  getUser(id: string | null): void {
    // axios.get(`http://localhost:8181/user/get/${id}`).then(
    //   (response) => {
    //     this.user = response.data;
    //     console.log('sucess', response);
    //   },
    // ).catch((response) => {
    //   console.log('erreur', response);
    // });
    this.user = barel.getUser(id);
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
