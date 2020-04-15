<template>
    <div>
        <button @click="handlesubmit">Suprimer mon compte</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import axios from '../../../node_modules/axios';

@Component
export default class DeleteProfil extends Vue {
    id: string | null = '';

    created() {
      this.id = sessionStorage.getItem('id');
    }

    delete() {
      axios.delete(`http://localhost:8181/user/delete/${this.id}`)
        .then((res) => {
          console.log('sucess', res);
          window.alert(res.data);
          this.$router.push('/connexion');
        })
        .catch((err) => {
          console.log('error', err);
        });
    }

    handlesubmit() {
      return (this.id && this.id !== null) ? this.delete() : window.alert('une erreur s\' est produite');
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
