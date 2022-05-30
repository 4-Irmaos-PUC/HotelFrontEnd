<template>
  <v-card class="mx-auto overflow-hidden" height="100%" width="100%">
    <v-system-bar color="black"></v-system-bar>

    <v-app-bar color="black" dark prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- <v-toolbar-title ></v-toolbar-title>-->

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Reserva</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Serviços</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Check-in</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Check-out</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-card-text>
      The navigation drawer will appear from the bottom on smaller size screens.
    </v-card-text> -->

    <v-parallax
      src="https://static.wixstatic.com/media/05e3dc_875e59fd2b77402297c54466ccee4b58.jpg/v1/fill/w_1919,h_620,al_c,q_85,enc_auto/05e3dc_875e59fd2b77402297c54466ccee4b58.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <div>
            <h1
              style="
                border-color: black;
                color: black;
                align: center;
                margin-left: 35%;
                margin-right: 35%;
                background-color: white;
              "
              tclass="text-h4 font-weight-thin mb-4"
            >
              Hotel 4 Irmãos
            </h1>
          </div>
          <div>
            <v-card-text> </v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-parallax>
    <div></div>

    <div style="margin: 20px">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h4 class="subheading">Reserve!</h4>

          <v-card-text> Data check in : </v-card-text>
          <v-card-text> Data check out: </v-card-text>
          <v-card-text> Data check out: </v-card-text>
        </v-col>
      </v-row>

      <div class="text-center">
        <v-btn rounded color="black" dark> Pesquisar </v-btn>
      </div>
    </div>

    <v-parallax
      src="https://static.wixstatic.com/media/8a3e6d_6a199168c8a045b3a68fd392dd57594b.jpg/v1/fill/w_1028,h_692,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8a3e6d_6a199168c8a045b3a68fd392dd57594b.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <div>
            <h1
              style="
                color: black;
                align: center;
                margin-left: 40%;
                margin-right: 40%;
                background-color: white;
              "
              tclass="text-h4 font-weight-thin mb-4"
            >
              Seja Bem-Vindo!
            </h1>
            <h3
              style="
                color: black;
                align: center;
                margin-left: 40%;
                margin-right: 40%;
                background-color: white;
              "
              tclass="text-h4 font-weight-thin mb-4"
            >
              <v-card-text>
                The navigation drawer will appear from the bottom on smaller
                size screens.
              </v-card-text>
              <v-card-text>
                The navigation drawer will appear from the bottom on smaller
                size screens.
              </v-card-text>
              <v-card-text>
                The navigation drawer will appear from the bottom on smaller
                size screens.
              </v-card-text>
            </h3>
          </div>
          <div>
            <v-card-text> </v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-parallax>

    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Hotel 4 Irmãos</strong>
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: "HotelHome",

  components: {
    // HelloWorld,
  },
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>