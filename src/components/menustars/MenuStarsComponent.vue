<template>
  <v-card>
    <v-snackbar
      :color="notificationType"
      right
      top
      :timeout="2000"
      v-model="showNotification"
    >
        {{ notificationMessage }}
    </v-snackbar>
    <v-dialog :value="dialogChangePassword" width="600" persistent>
      <change-password></change-password>
    </v-dialog>
    <v-navigation-drawer app v-model="drawer" :mini-variant.sync="mini" permanent class="elevation-10">
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img v-if="userData.avatar"
            src="https://scontent.fbhz8-1.fna.fbcdn.net/v/t1.0-9/12494914_882446941865067_1780254714521233887_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_eui2=AeGsZlOZj33BxJzfrqTwMCSONfH36BMthg018ffoEy2GDQljboIEY5xWaePSXkDD787Hs0PNpQyxKruGtkgglSzL&_nc_ohc=MKV8-xki498AX9QZAHG&_nc_ht=scontent.fbhz8-1.fna&oh=4cccad7551ab8c5c0461efbaeaca31f9&oe=5ED72DCC"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-title>
          {{ userData.name }} 
          <v-icon @click="showDialogChangePassword({show: true})">mdi-lock-open-outline</v-icon>
        </v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>

      <v-toolbar
        dark
        color="blue darken-2"
      >
        <v-icon>mdi-magnify</v-icon>
        <v-text-field
          v-if="!mini"
          v-model="searchMenus"
          cache-items
          class="ml-4"
          flat
          expand
          hide-no-data
          hide-details
          label="Buscar Menu"
          solo-inverted
        ></v-text-field>
      </v-toolbar>
      <v-divider></v-divider>

      <v-list dense>
        <div 
          v-for="menu in menus"
          :key="menu.description"
          @click="openMenu(menu); if(!menu.hasSubGroup) mini = true"
        >
          <menu-stars :menu="menu"></menu-stars>
        </div>
       
      </v-list>

      <template v-slot:append>
        <div v-if="!mini" class="pa-2">

          <div class="text-center">
            <v-btn @click="logout()" outlined large>
              Sair  
               <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>
          </div>
           
          <v-img src="../../assets/logo-removebg-preview.png"></v-img>
        </div>

        <div v-if="mini" class="pa-2">
          <v-img height="40" width="40" src="../../assets/logo-mini.png"></v-img>
        </div>
      </template>

    </v-navigation-drawer>
  </v-card>
</template>

<script>

  import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
  import ChangePassword from './ChangePassword'
  import Menu from './Menu'
  import debounce from '@util/debounce' 

  export default {
    name: "menustars",
    components: {
      "change-password": ChangePassword,
      "menu-stars": Menu
    },
    mixins: [debounce],
    mounted() {
      this.buildMenuSearch = this.debounce(this.buildMenuSearch, 500); 
    },
    computed: {
      ...mapState('menu', ['menus', 'minim', 'notificationType', 'notificationMessage']),
      ...mapState('login', ['userData', 'setStatus']),
      ...mapGetters('login', [
        'isLogged',
      ]),
      ...mapFields('menu', [
        'drawer',
        'dialogChangePassword',
        'showNotification'
      ])
    },
    data: () => ({
      mini: true,
      searchMenus: ''
    }),
    methods: {   
      ...mapMutations('menu', ['showDialogChangePassword']),
      ...mapActions('login', ['logout']),
      ...mapActions('menu', ['openMenu', 'buildMenuSearch', 'buildMenu']),
    },
    watch: {
      minim: function () {
        this.mini = this.minim
      },
      searchMenus (val) {
        var payload = {
          search: val,
        }
        if (payload.search.length > 2) {
          this.buildMenuSearch({ menu_name: payload.search })
        } else {
          this.buildMenu()
        }
      },
    }
  };
</script>

<style>
  .away {
    margin-bottom: 10px
  }

  .switch-center {
    display: flex;
    justify-content: center;
  }
</style>