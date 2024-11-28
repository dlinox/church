<template>
  <v-card
    title="Datos Generales"
    subtitle="Gestión de la información general"
    :disabled="loading"
  >
    <v-card-item class="border-t border-b">
      <v-row class="d-flex justify-space-between">
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.name"
            label="Nombre"
            clearable
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.address"
            label="Dirección"
            clearable
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.phoneNumber"
            label="Número de teléfono"
            clearable
          ></v-text-field>
        </v-col>

        <v-col cols="12" class="text-end">
          <v-btn :disabled="loading" @click="submit"> Guardar </v-btn>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  _getGeneralInformationBranch,
  _saveItem,
} from "@/app/modules/branch/services/branch.services";
import { BranchDTO } from "../models/Branch.types";

const loading = ref<boolean>(false);

const form = ref<BranchDTO>({
  id: "",
  name: "",
  address: "",
  phoneNumber: "",
});

const submit = async () => {
  loading.value = true;

  console.log(form.value);
  await _saveItem(form.value);

  loading.value = false;
};

const init = async () => {
  loading.value = true;
  const response = await _getGeneralInformationBranch();
  form.value = response;
  loading.value = false;
};

init();
</script>
