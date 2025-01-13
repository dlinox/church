<template>
  <v-dialog max-width="500" v-model="dialog" activator="parent">
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card :title="form.id ? 'Editar Registro' : 'Nuevo Registro'">
        <v-card-item class="border-t border-b">
          <v-row>
            <v-col cols="12">
              <v-select
                label="Sacramento"
                v-model="form.sacramentType"
                :items="sacramentsItems"
                :rules="rules.sacramentType"
                autocomplete="off"
                return-object
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model.number="form.number"
                label="Número de libro"
                :rules="rules.number"
                autocomplete="off"
              />
            </v-col>

            <v-col cols="6">
              <v-text-field
                label="Número de folios"
                v-model.number="form.foliosNumber"
                :rules="rules.foliosNumber"
                autocomplete="off"
              />
            </v-col>
            <v-col cols="6">
              <v-select
                label="Número de actas por folio"
                v-model="form.actsPerFolio"
                :items="[1, 2, 3, 4, 5]"
                :rules="rules.actsPerFolio"
                autocomplete="off"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Año de inicio"
                v-model="form.yearStart"
                :rules="rules.yearStart"
                autocomplete="off"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Año de fin"
                v-model="form.yearFinish"
                :rules="rules.yearFinish"
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
import { type BookDTO, BookRules, initBookValues } from "../models/Book.types";
import { sacramentsItems } from "../constants";
import { _saveItem } from "../services/";

const emit = defineEmits(["onSuccess"]);

const props = defineProps({
  formState: {
    type: Object as () => Partial<BookDTO>,
    default: () => ({}),
  },
});

const rules = BookRules;

const formRef = ref<HTMLFormElement | null>(null);
const loading = ref<boolean>(false);
const dialog = ref<boolean>(false);

const form = ref<BookDTO>({
  ...initBookValues(),
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
