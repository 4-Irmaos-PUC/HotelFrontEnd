<template>
  <v-card class="mx-auto overflow-hidden">
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

    <div style="margin: 3%">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-row>
            <v-col cols="12" lg="5">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Picker in menu"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="12" lg="5">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Picker in menu"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>

            <v-btn color="dark" outlined @click="active = !active">
              Pesquisar
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div>
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
              </h3>
            </div>
          </v-col>
        </v-row>
      </v-parallax>
    </div>

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
  data: () => ({
    drawer: false,
    group: null,
    date1: "",
    date2: "",
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
