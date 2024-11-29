<template>
  <v-dialog max-width="700" v-model="dialog" activator="parent">
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card :title="form.id ? 'Editar Registro' : 'Nuevo Registro'">
        <v-card-item class="border-t border-b">
          <h3 class="mb-2">Datos del esposo</h3>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="form.nameHusband"
                label="Nombre del Esposo"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.paternalSurnameHusband"
                label="Apellido Paterno"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.maternalSurnameHusband"
                label="Apellido Materno"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.birthDateHusband"
                label="Fecha de Nacimiento"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.birthPlaceHusband"
                label="Lugar de Nacimiento"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="form.fatherHusband" label="Padre" />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="form.motherHusband" label="Madre" />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="form.baptismPlaceHusband"
                label="Lugar de Bautizo"
              />
            </v-col>
          </v-row>
        </v-card-item>
        <v-card-item class="border-t border-b">
          <h3 class="mb-2">Datos de la esposa</h3>
         
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="form.nameWife"
                label="Nombre de la Esposa"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.paternalSurnameWife"
                label="Apellido Paterno"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.maternalSurnameWife"
                label="Apellido Materno"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.birthDateWife"
                label="Fecha de Nacimiento"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.birthPlaceWife"
                label="Lugar de Nacimiento"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="form.fatherWife" label="Padre" />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="form.motherWife" label="Madre" />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="form.baptismPlaceWife"
                label="Lugar de Bautizo"
              />
            </v-col>
          </v-row>
        </v-card-item>
        <v-card-actions>
          <v-btn
            type="button"
            variant="text"
            color="secondary"
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text="Guardar"
            color="primary"
            type="submit"
            :loading="loading"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script setup lang="ts">
/*
{
    title: "Nombre del Esposo",
    key: "nameHusband",
    value: "nameHusband",
  },
  {
    title: "Apellido Paterno",
    key: "paternalSurnameHusband",
    value: "paternalSurnameHusband",
  },
  {
    title: "Apellido Materno",
    key: "maternalSurnameHusband",
    value: "maternalSurnameHusband",
  },
  {
    title: "Fecha de Nacimiento",
    key: "birthDateHusband",
    value: "birthDateHusband",
  },
  {
    title: "Lugar de Nacimiento",
    key: "birthPlaceHusband",
    value: "birthPlaceHusband",
  },
  {
    title: "Padre",
    key: "fatherHusband",
    value: "fatherHusband",
  },
  {
    title: "Madre",
    key: "motherHusband",
    value: "motherHusband",
  },
  {
    title: "Lugar de Bautizo",
    key: "baptismPlaceHusband",
    value: "baptismPlaceHusband",
  },

  {
    title: "Nombre de la Esposa",
    key: "nameWife",
    value: "nameWife",
  },
  {
    title: "Apellido Paterno",
    key: "paternalSurnameWife",
    value: "paternalSurnameWife",
  },
  {
    title: "Apellido Materno",
    key: "maternalSurnameWife",
    value: "maternalSurnameWife",
  },
  {
    title: "Fecha de Nacimiento",
    key: "birthDateWife",
    value: "birthDateWife",
  },
  {
    title: "Lugar de Nacimiento",
    key: "birthPlaceWife",
    value: "birthPlaceWife",
  },
  {
    title: "Padre",
    key: "fatherWife",
    value: "fatherWife",
  },
  {
    title: "Madre",
    key: "motherWife",
    value: "motherWife",
  },
  {
    title: "Lugar de Bautizo",
    key: "baptismPlaceWife",
    value: "baptismPlaceWife",
  },
*/
import { ref } from "vue";

import { _saveItem } from "@/app/modules/office/services/office.services";

const emit = defineEmits(["onSuccess"]);

const props = defineProps({
  formState: {
    type: Object as () => Partial<any>,
    default: () => ({}),
  },
});

const loading = ref<boolean>(false);
const dialog = ref<boolean>(false);

const form = ref<any>({
  ...props.formState,
});

const submit = async () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    dialog.value = false;
    emit("onSuccess");
  }, 1500);
};
</script>
