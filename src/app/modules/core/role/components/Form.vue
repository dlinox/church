<template>
  <v-dialog max-width="500" v-model="dialog" activator="parent">
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card :title="form.id ? 'Editar Registro' : 'Nuevo Registro'">
        <v-card-item class="border-t border-b">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="form.displayName"
                label="Nombre"
                :rules="rules.displayName"
                autocomplete="off"
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
import { type RoleDTO, RoleRules, initRoleValues } from "../models/Role.types";

import { _saveItem } from "../services/";

const emit = defineEmits(["onSuccess"]);

const props = defineProps({
  formState: {
    type: Object as () => Partial<RoleDTO>,
    default: () => ({}),
  },
});

const rules = RoleRules;

const formRef = ref<HTMLFormElement | null>(null);
const loading = ref<boolean>(false);
const dialog = ref<boolean>(false);

const form = ref<RoleDTO>({
  ...initRoleValues(),
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
