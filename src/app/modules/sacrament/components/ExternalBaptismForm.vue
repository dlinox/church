<template>
  <v-dialog max-width="500" v-model="dialog" activator="parent" persistent>
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card title="Registrar Bautismo Externo">
        <v-card-item class="border-t border-b">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="form.date"
                label="Fecha de Bautismo"
                type="date"
              />
            </v-col>
            <v-col cols="12">
              <LnxAutocompleteServer
                v-model="form.parish"
                :service="_parishItems"
                label="Libro predeterminado"
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
          <v-btn type="submit" :loading="loading"> Guardar </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { _parishItems } from "@/app/services/selectItems.services";
import { _saveExternalBaptismItem } from "@/app/modules/sacrament/services/sacrament-records.services";
import LnxAutocompleteServer from "@/common/ui/components/LnxAutocompleteServer.vue";

const emit = defineEmits(["onSuccess"]);
const props = defineProps<{
  id: any;
}>();

const form = ref({
  personId: props.id,
  date: null,
  parish: null,
});

const dialog = ref<boolean>(false);
const loading = ref<boolean>(false);

const submit = async () => {
  loading.value = true;
  const response = await _saveExternalBaptismItem(form.value);
  if (response) {
    emit("onSuccess");
    dialog.value = false;
  }
  loading.value = false;
};

const init = async () => {};

init();
</script>
