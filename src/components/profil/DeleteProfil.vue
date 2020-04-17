<template>
    <div>
        <button @click="handlesubmit">Suprimer mon compte</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as barel from '../../serviceUser/static-methodes/index';

import axios from '../../../node_modules/axios';

@Component
export default class DeleteProfil extends Vue {
    id: string | null = '';

    created(): void {
      this.id = barel.myId();
    }

    deleteUser(): void {
      window.alert(barel.deleteUser(this.id).toString());
      this.$router.push('connexion');
    }

    handlesubmit(): void {
      return (this.id && this.id !== null) ? this.deleteUser() : window.alert('une erreur s\' est produite');
    }
}
</script>

<style scoped>
    button{
        margin-top: 30px;
padding:6px 0 6px 0;
font:bold 13px Arial;
background:#f5f5f5;
color:#555;
border-radius:2px;
width:60%;
border:1px solid #ccc;
box-shadow:1px 1px 3px #999;
     margin-bottom: 20px;
    }
    button:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 780px) {
        button {
            width: 80%;
            margin-left: 0%;
        }
    }
</style>
