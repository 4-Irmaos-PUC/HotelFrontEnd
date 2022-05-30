<template>
  <v-app>

      <login-home></login-home>
      <tela-servicos></tela-servicos>

  </v-app>
</template>

<script>
import LoginHome from './components/Login/LoginHome.vue';
import TelaServicos from './components/Servicos/TelaServicos.vue';

export default {
  name: 'App',

  components: {
    LoginHome,
    TelaServicos,
  },

  data: () => ({
    //
  }),
};
</script>
