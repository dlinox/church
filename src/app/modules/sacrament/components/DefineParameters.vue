<template>
  <v-dialog max-width="400" v-model="dialog" activator="parent">
    <v-card title="Definir parámetros">
      <v-alert
        density="compact"
        variant="tonal"
        color="info"
        icon="mdi-information"
        class="text-subtitle-2"
      >
        Estos valores se guardarán en tu navegador y se usarán como
        predeterminados al crear un acta.
      </v-alert>
      <v-card-item class="border-t border-b">
        <v-row>
          <v-col cols="12">
            <LnxAutocompleteServer
              v-model="form.defaultBook"
              :service="booksItems"
              label="Libro predeterminado"
              autocomplete="off"
              :minChars="1"
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
          type="button"
          @click="submit"
          :loading="loading"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { _booksItems } from "@/app/services/selectItems.services";
import LnxAutocompleteServer from "@/common/ui/components/LnxAutocompleteServer.vue";
const dialog = ref<boolean>(false);
const loading = ref<boolean>(false);

const props = defineProps<{
  type: string;
}>();

const form = ref({
  defaultBook: null,
});

const booksItems = async (search: string) => {
  return await _booksItems(props.type, search);
};

const sacaramentType: { [key: string]: string } = {
  "1": "baptismParameters",
  "2": "confirmationParameters",
  "4": "marriageParameters",
};

const submit = async () => {
  loading.value = true;
  let data = {
    defaultBook: form.value.defaultBook,
  };
  const key = sacaramentType[props.type];
  localStorage.setItem(key, JSON.stringify(data));
  loading.value = false;
  dialog.value = false;
};

const init = () => {
  const key = sacaramentType[props.type];
  let data = localStorage.getItem(key);
  if (data) {
    let parameters = JSON.parse(data);
    form.value.defaultBook = parameters.defaultBook;
  }
};

init();
</script>
