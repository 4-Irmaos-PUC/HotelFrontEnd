<template>
    <v-list-item
        link
        :key="menu.description"
    >
        <v-list-item-icon v-if="menu.icon">
            <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
            <v-list-item-title>{{ menu.description }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script>

  import { mapActions } from 'vuex'

  export default {
    name: "simple-menu",
    computed: {
    },
    data: () => ({
      mini: true
    }),
    methods: {
      ...mapActions('menu', ['openMenu']),   
    },
    props: [
        'key_menu',
        'menu'
    ]
  };
</script>

<style>
    .menu-line {
        display: inline;
    }
</style>