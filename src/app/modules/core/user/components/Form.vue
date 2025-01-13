<template>
  <v-dialog max-width="500" v-model="dialog" activator="parent">
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card :title="form.id ? 'Editar Registro' : 'Nuevo Registro'">
        <v-card-item class="border-t border-b">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="form.name"
                label="Nombre completo"
                :rules="UserRules.name"
                autocomplete="off"
                :error-messages="formErrors.name"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.email"
                label="Correo electrónico"
                :rules="UserRules.email"
                autocomplete="off"
                :error-messages="formErrors.email"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.username"
                label="Usuario"
                :rules="UserRules.username"
                autocomplete="off"
                :error-messages="formErrors.username"
              />
            </v-col>

            <v-col cols="12" v-if="!form.id">
              <v-text-field
                v-model="form.password"
                label="Contraseña"
                :rules="UserRules.password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="new-password"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
                :error-messages="formErrors.password"
              />
            </v-col>

            <v-col cols="12">
              <v-select
                v-model="form.role"
                :items="roleItems"
                label="Rol"
                autocomplete="off"
                :rules="UserRules.role"
                :error-messages="formErrors.role"
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
import { type UserDTO, UserRules, initUserValues } from "../models/User.types";

import { _saveItem } from "../services/user.services";
import { ItemSelectDTO } from "@/common/models/ItemSelect.types";

const emit = defineEmits(["onSuccess"]);

const props = defineProps({
  formState: {
    type: Object as () => Partial<UserDTO>,
    default: () => ({}),
  },
  roleItems: {
    type: Array as () => ItemSelectDTO[],
    default: () => [],
  },
});

const formRef = ref<HTMLFormElement | null>(null);
const loading = ref<boolean>(false);
const dialog = ref<boolean>(false);

const showPassword = ref<boolean>(false);

const form = ref<UserDTO>({
  ...initUserValues(),
  ...props.formState,
});

const formErrors = ref<any>({});

const submit = async () => {
  if (loading.value) return;
  formErrors.value = {};
  const { valid } = await formRef.value!.validate();
  if (!valid) return;
  loading.value = true;
  const response = await _saveItem(form.value);
  if (response) {
    if (response.errors) {
      formErrors.value = response.errors;
    } else {
      if (form.value.id == null) form.value = initUserValues();
      emit("onSuccess");
      dialog.value = false;
    }
  }
  loading.value = false;
};
</script>
