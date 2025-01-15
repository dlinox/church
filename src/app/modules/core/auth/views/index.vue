<template>
  <v-container
    class="h-100 d-flex justify-space-between align-center flex-column"
  >
    <div>
      <img :src="LogoApp" alt="logo" class="mb-4" width="180" />
    </div>
    <v-card class="bg-white" elevation="0">
      <v-card-item>
        <h2 class="">Bienvenido de nuevo</h2>
        <p class="">Ingrese sus credenciales para acceder al sistema.</p>
      </v-card-item>

      <v-card-item>
        <v-form @submit.prevent="submitSignIn">
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Usuario"
                v-model="form.username"
                prepend-inner-icon="mdi-account"
                type="text"
                :rules="AuthFormRules.username"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                autocomplete="off"
                v-model="form.password"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="() => (showPassword = !showPassword)"
                label="Contraseña"
                :rules="AuthFormRules.password"
                :type="showPassword ? 'text' : 'password'"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-btn type="submit" color="primary" block :loading="loading">
                Ingresar
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-item>
    </v-card>

    <div class="text-center">
      <small>
        <a href="https://caripperu.com/" target="_blank">CARIP PERU</a>
        - Versión 1.0
      </small>
    </div>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { LogoApp } from "@/common/resources/images";
import { signIn } from "../services";
import { type AuthRequestDTO, AuthFormRules } from "../models";

const form = ref<AuthRequestDTO>({
  username: "",
  password: "",
});

const loading = ref(false);

const showPassword = ref(false);

const submitSignIn = async () => {
  loading.value = true;

  await signIn(form.value);

  loading.value = false;
};
</script>
