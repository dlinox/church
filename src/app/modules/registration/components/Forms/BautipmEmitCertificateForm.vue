<template>
  <v-dialog max-width="700" v-model="dialog" activator="parent">
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card title="Editar Certificado de Bautizo">
        <v-card-item class="border-t border-b">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="form.name" label="Nombres" readonly />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.paternalSurname"
                label="Apellido Paterno"
                readonly
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.maternalSurname"
                label="Apellido Materno"
                readonly
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                type="date"
                v-model="form.bautismDate"
                label="Fecha de Bautizo"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.godfatherName"
                label="Nombre del Padrino"
              />
            </v-col>

            <v-col cols="12">
              <v-textarea
                v-model="form.observation"
                label="Anotaciones marginales"
                rows="3"
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
