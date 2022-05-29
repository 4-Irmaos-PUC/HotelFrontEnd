<template>
  <v-app>
    
      

      
     <!--<login-home></login-home>-->
     <hotel-home>

       
     </hotel-home>

    

   
  </v-app>
</template>

<script>
//import LoginHome from './components/Login/LoginHome.vue';
//import HelloWorld from './components/HelloWorld';
import HotelHome from './components/HotelHome/HotelHome.vue';

export default {
  name: 'App',

  components: {
    //HelloWorld,
    //LoginHome,
    HotelHome,
  },

  data: () => ({
    //
  }),
};
</script>
