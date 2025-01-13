<template>
  <v-dialog max-width="400" v-model="dialog" activator="parent">
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card :title="form.id ? 'Editar Registro' : 'Nuevo Registro'">
        <v-card-item class="border-t border-b">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="form.date"
                label="Fecha de bautismo"
                type="date"
                :rules="rules.date"
                autocomplete="off"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                label="Ministro"
                v-model="form.ministerId"
                :items="ministersItems"
                :rules="rules.ministerId"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="form.description"
                label="Descripción"
                :rules="rules.description"
                rows="2"
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
  type SacramentDTO,
  SacramentRules,
  initSacramentValues,
} from "../models/Sacrament.types";

import { _saveItem } from "@/app/modules/sacrament/services/sacrament.services";
import { ItemSelectDTO } from "@/common/models/ItemSelect.types";

const emit = defineEmits(["onSuccess"]);

const props = defineProps<{
  formState?: SacramentDTO;
  ministersItems: ItemSelectDTO[];
  type: string;
}>();

const rules = SacramentRules;

const formRef = ref<HTMLFormElement | null>(null);
const loading = ref<boolean>(false);
const dialog = ref<boolean>(false);

const form = ref<SacramentDTO>({
  ...initSacramentValues(props.type),
  ...props.formState,
});

const submit = async () => {
  const { valid } = await formRef.value!.validate();
  if (!valid) return;
  loading.value = true;
  const response = await _saveItem(form.value);
  if (response) {
    if (form.value.id == null) {
      form.value = initSacramentValues(props.type);
    }
    emit("onSuccess");
    dialog.value = false;
  }
  loading.value = false;
};
</script>
