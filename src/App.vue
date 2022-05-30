<template>
  <v-app>
    <login-home></login-home>
    <tela-servicos></tela-servicos>

    <!--<login-home></login-home>-->
    <hotel-home> </hotel-home>
  </v-app>
</template>

<script>
import LoginHome from "./components/Login/LoginHome.vue";
import TelaServicos from "./components/Servicos/TelaServicos.vue";
//import LoginHome from './components/Login/LoginHome.vue';
//import HelloWorld from './components/HelloWorld';
import HotelHome from "./components/Home/HotelHome.vue";

export default {
  name: "App",

  components: {
    LoginHome,
    TelaServicos,
    //HelloWorld,
    //LoginHome,
    HotelHome,
  },

  data: () => ({
    //
  }),
};
</script>
