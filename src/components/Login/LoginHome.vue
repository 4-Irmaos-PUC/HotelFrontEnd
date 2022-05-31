<template>
  <v-app id="inspire" class="login-container">
    <v-snackbar
      :color="notificationType"
      right
      top
      :timeout="2000"
      v-model="showNotification"
    >
      {{ notificationMessage }}
    </v-snackbar>
    <v-container class="teste" fill-height fluid v-on:keyup.enter="login">
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-col align="center" justify="center" cols="12" sm="12" md="12">
            <v-img
              max-width="200"
              max-height="200"
              src="../../../public/img/logo.png"
            ></v-img>
          </v-col>
          <v-form ref="form" v-model="valid" lazy-validation @submit="login">
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm12 md12>
                  <v-text-field
                    prepend-icon="mdi-account"
                    :rules="rulesFields"
                    class="input-login"
                    label="Email *"
                    v-model="username"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field
                    prepend-icon="mdi-lock"
                    :rules="rulesFields"
                    class="input-login"
                    label="Senha *"
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>

          <v-col class="text-center">
            <v-btn text type="submit" right @click="login">Entrar</v-btn>
          </v-col>
           <v-col class="text-center">
            <v-btn text type="submit" right @click="login">Não tem usuário? Cadastre-se!</v-btn>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style lang="sass" scoped>
.login-container
  overflow: hidden !important

.title-login
  color: white

.input-login
  color: white !important

</style>


<script>
import { mapActions, mapGetters, mapState } from "vuex";
// import { mapFields } from "vuex-map-fields";

export default {
  name: "LoginHome",

  data: () => ({
    valid: false,
    showPassword: false,
    submitted: false,
    rulesFields: [(value) => !!value || "Campo obrigatório"],
  }),
  computed: {
    ...mapState("login", [
      "accessToken",
      "user",
      "notificationType",
      "notificationMessage",
    ]),
    // ...mapFields("login", [
    //   "user.username",
    //   "user.password",
    //   "showNotification",
    // ]),
    ...mapGetters("login", ["isLogged"]),
  },
  methods: {
    login() {
      let valid = this.$refs.form.validate();
      if (valid) {
        this.tryLogin();
      }
    },
    ...mapActions("login", ["tryLogin", "redirectToHomePage"]),
  },
};
</script>
