<template>
  <v-dialog max-width="800" v-model="dialog" activator="parent">
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card :title="form.id ? 'Editar Registro' : 'Nuevo Registro'">
        <v-card-item class="border-t border-b">
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="form.documentNumber"
                label="Documento"
                :rules="rules.documentNumber"
              />
            </v-col>
            <v-col cols="8">
              <v-text-field
                label="Nombre"
                v-model.number="form.name"
                :rules="rules.name"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Apellido paterno"
                v-model.number="form.paternalLastName"
                :rules="rules.paternalLastName"
              />
            </v-col>

            <v-col cols="6">
              <v-text-field
                label="Apellido materno"
                v-model.number="form.maternalLastName"
                :rules="rules.maternalLastName"
              />
            </v-col>
            <v-col cols="8">
              <v-text-field
                label="Fecha de nacimiento"
                v-model="form.birthDate"
                type="date"
                :rules="rules.birthDate"
              />
            </v-col>
            <v-col cols="4">
              <v-select
                label="Género"
                v-model="form.gender"
                :items="genderItems"
                :rules="rules.gender"
                return-object
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Celular"
                v-model.number="form.phoneNumber"
                :rules="rules.phoneNumber"
              />
            </v-col>

            <v-col cols="6">
              <v-text-field
                label="Correo"
                v-model.number="form.email"
                :rules="rules.email"
              />
            </v-col>

            <v-col cols="12">
              <v-select
                label="Tipo de ministro"
                v-model="form.type"
                :items="typeItems"
                :rules="rules.type"
                return-object
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
import {
  type MinisterDTO,
  MinisterRules,
  initMinisterValues,
} from "../models/Minister.types";
import { typeItems, genderItems } from "../constants";
import { _saveItem } from "../services/";

const emit = defineEmits(["onSuccess"]);

const props = defineProps({
  formState: {
    type: Object as () => Partial<MinisterDTO>,
    default: () => ({}),
  },
});

const rules = MinisterRules;

const formRef = ref<HTMLFormElement | null>(null);
const loading = ref<boolean>(false);
const dialog = ref<boolean>(false);

const form = ref<MinisterDTO>({
  ...initMinisterValues(),
  ...props.formState,
});

const submit = async () => {
  const { valid } = await formRef.value!.validate();
  if (!valid) return;
  loading.value = true;
  const response = await _saveItem(form.value);
  if (response) {
    if (form.value.id == null) {
      formRef.value!.reset();
    }

    emit("onSuccess");
    dialog.value = false;
  }
  loading.value = false;
};
</script>
