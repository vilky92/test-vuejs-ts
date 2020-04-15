<template>
    <div>
      <GetProfil/>
      <UpdateProfil/>
      <DeleteProfil/>
    </div>
</template>

<script>
import GetProfil from '../components/profil/GetProfil.vue';
import UpdateProfil from '../components/profil/UpdateProfil.vue';
import DeleteProfil from '../components/profil/DeleteProfil.vue';

export default {
  name: 'profil',
  components: {
    GetProfil,
    UpdateProfil,
    DeleteProfil,
  },
};
</script>
