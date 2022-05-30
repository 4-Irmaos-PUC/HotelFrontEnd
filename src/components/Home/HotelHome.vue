<template>
  <v-card class="mx-auto overflow-hidden" height="100%" width="100%">
    <v-system-bar color="black"></v-system-bar>

    <v-app-bar color="black" dark prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- <v-toolbar-title ></v-toolbar-title>-->

      <v-spacer></v-spacer>

      
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

    <div style="margin:3%">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
      
          
        

      
    

    <!--data de check in e checkout Busca-->
<div>
<v-row>
      <v-col
        cols="12"
        lg="5"
      >
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
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
        
      </v-menu>
    
        
      </v-col>
      <v-col
        cols="12"
        lg="5"
      >
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
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
        
     
      </v-col>

   

      <v-btn
        
        color="dark"
        outlined
        @click="active = !active"
      >
        Pesquisar
      </v-btn>
    
    </v-row>



  
</div>

<!--<div class="text-center">
        <v-btn rounded color="black" dark> Pesquisar </v-btn>
      </div>-->

      </v-col>
      </v-row>

</div>
    <!--fim data de check in e checkout busca-->

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
    date1: "" ,
    date2: "" 
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>