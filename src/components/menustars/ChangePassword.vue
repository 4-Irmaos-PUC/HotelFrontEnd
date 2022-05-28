<template>
    <v-card>
        <v-card-title class="text-center justify-center">
          <span class="headline">Alterar Senha</span>
        </v-card-title>
        <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12 sm12 md12>
                    <v-text-field
                    required
                    label="Senha Atual *"
                    v-model="current_password"
                    :error-messages="errors.collect('current_password')"
                    v-validate="'required'"
                    data-vv-name="current_password"
                    @click:append="showCurrent = !showCurrent"
                    :type="showCurrent ? 'text' : 'password'" 
                    :append-icon="showCurrent ? 'mdi-eye' : 'mdi-eye-off'"
                    outlined
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                    <v-text-field
                        required
                        label="Nova Senha *"
                        v-model="new_password"
                        :error-messages="errors.collect('new_password')"
                        v-validate="'required'"
                        data-vv-name="new_password"
                        @click:append="showNew = !showNew"
                        :type="showNew ? 'text' : 'password'" 
                        :append-icon="showNew ? 'mdi-eye' : 'mdi-eye-off'"
                        outlined
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                    <v-text-field
                        required
                        label="Confirmar Senha *"
                        v-model="confirmation_password"
                        :error-messages="errors.collect('confirmation_password')"
                        v-validate="'required'"
                        data-vv-name="confirmation_password"
                        @click:append="showConfirmation = !showConfirmation"
                        :type="showConfirmation ? 'text' : 'password'" 
                        :append-icon="showConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
                        outlined
                    ></v-text-field>
                </v-flex>
            </v-layout>
        </v-container>
        <v-card-actions>
          <v-col>
            <v-btn text @click="showDialogChangePassword({show: false})">Cancelar</v-btn>
          </v-col>
          <v-col class="text-right">
            <v-btn text type="submit" @click="changePass">Alterar</v-btn>
          </v-col>
        </v-card-actions>
    </v-card>
</template>

<script>

  import { mapActions, mapState, mapMutations } from 'vuex'
  import { mapFields } from 'vuex-map-fields'

  export default {
    name: "ChangePassword",
    computed: {
      ...mapState('login', ['userData', 'setStatus']),
      ...mapFields('menu', [
        'changePassword.current_password',
        'changePassword.confirmation_password',
        'changePassword.new_password'
      ])
    },
    data: () => ({
        showCurrent: false,
        showNew: false, 
        showConfirmation: false
    }),
    methods: {   
      ...mapMutations('menu', ['showDialogChangePassword']),
      ...mapActions('menu', ['changePass', 'openMenu']),
    }
  };
</script>