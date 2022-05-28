<template>
  <div v-if="showMenu">
    <simple-menu
      v-if="
        !menu.hasSubGroup &&
        (menu.roles ? menu.roles.indexOf(userData.role) != -1 : true)
      "
      :menu="menu"
    ></simple-menu>

    <compound-menu
      v-if="
        menu.hasSubGroup &&
        (menu.roles ? menu.roles.indexOf(userData.role) != -1 : true)
      "
      :menu="menu"
    ></compound-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CompoundMenu from "./CompoundMenu";
import SimpleMenu from "./SimpleMenu";

export default {
  name: "menustarsitem",
  computed: {
    ...mapState("login", ["userData"]),
    ...mapState("menu", ["showMenu"]),
  },
  components: {
    "compound-menu": CompoundMenu,
    "simple-menu": SimpleMenu,
  },
  data: () => ({
    mini: true,
    menus: [],
  }),
  methods: {},
  props: ["menu"],
};
</script>

<style>
.away {
}

.switch-center {
}
</style>