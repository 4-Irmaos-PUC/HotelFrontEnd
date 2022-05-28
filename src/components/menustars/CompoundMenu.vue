<template>
    <div class="menu-line">
        <v-list-group
            :prepend-icon="menu.icon"
            no-action
        >
            <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title v-text="menu.description"></v-list-item-title>
                </v-list-item-content>
            </template>

            <template
                v-for="subMenu in menu.menus.filter((m) => (m.roles) ? (m.roles.indexOf(userData.role) != -1) : true)"
            >                
                <v-list-item
                    v-if="subMenu.hasSubGroup != true"
                    :key="subMenu.description"
                    @click="openMenu(subMenu); mini = true"
                >
                    
                    <v-list-item-content>
                        <v-list-item-title v-text="subMenu.description"></v-list-item-title>
                    </v-list-item-content>

                </v-list-item>

                <v-list-group
                    v-else
                    :key="subMenu.description"
                    :value="true"
                    no-action
                    sub-group
                    class="ml-10"
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="subMenu.description"></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <template
                        v-for="subsubMenu in subMenu.menus.filter((m) => (m.roles) ? (m.roles.indexOf(userData.role) != -1) : true)"
                    >          
                        <v-list-item
                            :key="subsubMenu.description"
                            @click="openMenu(subsubMenu); mini = true"
                        >
                            <v-list-item-title v-text="subsubMenu.description"></v-list-item-title>
                        </v-list-item>
                    </template>

                </v-list-group>
            </template>    

        </v-list-group>
    </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex'

  export default {
    name: "compound-menu-stars",
    computed: {
        ...mapState('login', ['userData']),
    },
    data: () => ({
      mini: true
    }),
    methods: {   
      ...mapActions('menu', ['openMenu']),
    },
    props: [
        'menu'
    ]
  };
</script>

<style>
  .menu-line {
      display: inline;
  }
</style>