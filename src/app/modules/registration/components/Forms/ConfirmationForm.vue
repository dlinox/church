<template>
  <v-dialog max-width="700" v-model="dialog" activator="parent">
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card :title="form.id ? 'Editar Registro' : 'Nuevo Registro'">
        <v-card-item class="border-t border-b">
          <v-row>

            <!-- Parroquia de bautizo -->
            <v-col cols="12">
              <v-text-field v-model="form.baptismParish" label="Parroquia de Bautizo" />
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="form.name" label="Nombres" />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.paternalSurname"
                label="Apellido Paterno"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.maternalSurname"
                label="Apellido Materno"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.birthdate"
                label="Fecha de Nacimiento"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.birthplace"
                label="Lugar de Nacimiento"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.fatherName"
                label="Nombre del Padre"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.motherName"
                label="Nombre de la Madre"
              />
            </v-col>

            <v-col cols="12">
              <v-switch
                :label="form.status ? 'Habilitado' : 'Deshabilitado'"
                v-model="form.status"
                color="blue-darken-4"
                inset
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
